'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, UserPlus, Check, X, Loader2, Users } from 'lucide-react';
import {
  searchUsers,
  sendFriendRequest,
  getFriends,
  getPendingFriendRequests,
  getSentFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
  removeFriend,
  checkFriendshipStatus
} from '@/lib/supabase/queries';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

interface FriendsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FriendsDialog({ open, onOpenChange }: FriendsDialogProps) {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [friends, setFriends] = useState<any[]>([]);
  const [pendingRequests, setPendingRequests] = useState<any[]>([]);
  const [sentRequests, setSentRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    if (open && user) {
      loadFriends();
      loadPendingRequests();
      loadSentRequests();
    }
  }, [open, user]);

  const loadFriends = async () => {
    if (!user) return;
    try {
      const data = await getFriends(user.id);
      setFriends(data);
    } catch (error) {
      console.error('Error loading friends:', error);
    }
  };

  const loadPendingRequests = async () => {
    if (!user) return;
    try {
      const data = await getPendingFriendRequests(user.id);
      setPendingRequests(data);
    } catch (error) {
      console.error('Error loading pending requests:', error);
    }
  };

  const loadSentRequests = async () => {
    if (!user) return;
    try {
      const data = await getSentFriendRequests(user.id);
      setSentRequests(data);
    } catch (error) {
      console.error('Error loading sent requests:', error);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim() || !user) return;

    try {
      setLoading(true);
      const results = await searchUsers(searchTerm);
      
      // Filter out current user and check friendship status
      const filteredResults = await Promise.all(
        results
          .filter(result => result.id !== user.id)
          .map(async (result) => {
            const status = await checkFriendshipStatus(user.id, result.id);
            return { ...result, friendshipStatus: status };
          })
      );
      
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error searching users:', error);
      toast.error('Erro ao buscar usuários');
    } finally {
      setLoading(false);
    }
  };

  const handleSendRequest = async (friendId: string) => {
    if (!user) return;

    try {
      setActionLoading(friendId);
      await sendFriendRequest(user.id, friendId);
      toast.success('Solicitação enviada!');
      handleSearch(); // Refresh search results
      loadSentRequests();
    } catch (error) {
      console.error('Error sending friend request:', error);
      toast.error('Erro ao enviar solicitação');
    } finally {
      setActionLoading(null);
    }
  };

  const handleAcceptRequest = async (friendshipId: string) => {
    try {
      setActionLoading(friendshipId);
      await acceptFriendRequest(friendshipId);
      toast.success('Solicitação aceita!');
      loadFriends();
      loadPendingRequests();
    } catch (error) {
      console.error('Error accepting request:', error);
      toast.error('Erro ao aceitar solicitação');
    } finally {
      setActionLoading(null);
    }
  };

  const handleRejectRequest = async (friendshipId: string) => {
    try {
      setActionLoading(friendshipId);
      await rejectFriendRequest(friendshipId);
      toast.success('Solicitação rejeitada');
      loadPendingRequests();
    } catch (error) {
      console.error('Error rejecting request:', error);
      toast.error('Erro ao rejeitar solicitação');
    } finally {
      setActionLoading(null);
    }
  };

  const handleRemoveFriend = async (friendshipId: string) => {
    try {
      setActionLoading(friendshipId);
      await removeFriend(friendshipId);
      toast.success('Amigo removido');
      loadFriends();
    } catch (error) {
      console.error('Error removing friend:', error);
      toast.error('Erro ao remover amigo');
    } finally {
      setActionLoading(null);
    }
  };

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
      : name.substring(0, 2).toUpperCase();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users size={20} />
            Amigos
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="friends" className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="friends">
              Amigos ({friends.length})
            </TabsTrigger>
            <TabsTrigger value="requests">
              Solicitações ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="search">
              Buscar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="friends" className="flex-1 overflow-y-auto mt-4">
            {friends.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Users size={48} className="mx-auto mb-2 opacity-50" />
                <p>Você ainda não tem amigos</p>
                <p className="text-sm">Busque e adicione amigos!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {friends.map((friendship) => (
                  <div
                    key={friendship.id}
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <Avatar>
                      <AvatarImage src={friendship.friend.avatar_url} />
                      <AvatarFallback className="bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                        {getInitials(friendship.friend.full_name || friendship.friend.email)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">
                        {friendship.friend.full_name || friendship.friend.email}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {friendship.friend.email}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveFriend(friendship.id)}
                      disabled={actionLoading === friendship.id}
                    >
                      {actionLoading === friendship.id ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        'Remover'
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="requests" className="flex-1 overflow-y-auto mt-4">
            {pendingRequests.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <UserPlus size={48} className="mx-auto mb-2 opacity-50" />
                <p>Nenhuma solicitação pendente</p>
              </div>
            ) : (
              <div className="space-y-2">
                {pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center gap-3 p-3 rounded-lg border"
                  >
                    <Avatar>
                      <AvatarImage src={request.user.avatar_url} />
                      <AvatarFallback className="bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                        {getInitials(request.user.full_name || request.user.email)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">
                        {request.user.full_name || request.user.email}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {request.user.email}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleAcceptRequest(request.id)}
                        disabled={actionLoading === request.id}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {actionLoading === request.id ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Check size={16} />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRejectRequest(request.id)}
                        disabled={actionLoading === request.id}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="search" className="flex-1 overflow-y-auto mt-4">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Buscar por nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} disabled={loading}>
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Search size={16} />
                  )}
                </Button>
              </div>

              {searchResults.length > 0 && (
                <div className="space-y-2">
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className="flex items-center gap-3 p-3 rounded-lg border"
                    >
                      <Avatar>
                        <AvatarImage src={result.avatar_url} />
                        <AvatarFallback className="bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                          {getInitials(result.full_name || result.email)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">
                          {result.full_name || result.email}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {result.email}
                        </p>
                      </div>
                      {result.friendshipStatus ? (
                        <Button size="sm" variant="outline" disabled>
                          {result.friendshipStatus.status === 'accepted' ? 'Amigos' : 'Pendente'}
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => handleSendRequest(result.id)}
                          disabled={actionLoading === result.id}
                          className="bg-violet-600 hover:bg-violet-700"
                        >
                          {actionLoading === result.id ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <>
                              <UserPlus size={16} className="mr-1" />
                              Adicionar
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
