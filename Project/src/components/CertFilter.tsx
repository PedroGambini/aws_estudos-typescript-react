import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CertFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const certifications = [
  { value: "cloud-practitioner", label: "Cloud Practitioner" },
  { value: "solutions-architect", label: "Solutions Architect" },
  { value: "sysops", label: "SysOps Administrator" },
  { value: "developer", label: "Developer Associate" },
];

export function CertFilter({ value, onChange }: CertFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[220px] bg-card border-border">
        <SelectValue placeholder="Certificação" />
      </SelectTrigger>
      <SelectContent>
        {certifications.map((cert) => (
          <SelectItem key={cert.value} value={cert.value}>
            {cert.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
