import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Plus, Search, Pencil, Trash2, Phone, Mail, Building2, User } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  full_name: string | null;
  email: string | null;
  email_secondary: string | null;
  phone: string | null;
  phone_secondary: string | null;
  phone_extension: string | null;
  address: string | null;
  business_name: string | null;
  contact_type: string;
  contact_title: string | null;
  account_number: string | null;
  website: string | null;
  notes: string | null;
  created_at: string;
}

const EMPTY_FORM = {
  name: "",
  full_name: "",
  email: "",
  email_secondary: "",
  phone: "",
  phone_secondary: "",
  phone_extension: "",
  address: "",
  business_name: "",
  contact_type: "personal",
  contact_title: "",
  account_number: "",
  website: "",
  notes: "",
};

export default function Contacts() {
  const { user } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const fetchContacts = async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .eq("user_id", user.id)
      .order("name");
    if (error) {
      toast({ title: "Error", description: "Failed to load contacts", variant: "destructive" });
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, [user]);

  const handleSave = async () => {
    if (!user || !form.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return;
    }

    const payload = {
      name: form.name.trim(),
      full_name: form.full_name || null,
      email: form.email || null,
      email_secondary: form.email_secondary || null,
      phone: form.phone || null,
      phone_secondary: form.phone_secondary || null,
      phone_extension: form.phone_extension || null,
      address: form.address || null,
      business_name: form.business_name || null,
      contact_type: form.contact_type,
      contact_title: form.contact_title || null,
      account_number: form.account_number || null,
      website: form.website || null,
      notes: form.notes || null,
      user_id: user.id,
      conflict_style: "unknown",
      frequency: "as_needed",
      neuro_type: "unknown",
    };

    let error;
    if (editingId) {
      ({ error } = await supabase.from("contacts").update(payload).eq("id", editingId));
    } else {
      ({ error } = await supabase.from("contacts").insert(payload));
    }

    if (error) {
      toast({ title: "Error saving contact", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editingId ? "Contact updated" : "Contact added" });
      setDialogOpen(false);
      setEditingId(null);
      setForm(EMPTY_FORM);
      fetchContacts();
    }
  };

  const handleEdit = (contact: Contact) => {
    setEditingId(contact.id);
    setForm({
      name: contact.name,
      full_name: contact.full_name || "",
      email: contact.email || "",
      email_secondary: contact.email_secondary || "",
      phone: contact.phone || "",
      phone_secondary: contact.phone_secondary || "",
      phone_extension: contact.phone_extension || "",
      address: contact.address || "",
      business_name: contact.business_name || "",
      contact_type: contact.contact_type || "personal",
      contact_title: contact.contact_title || "",
      account_number: contact.account_number || "",
      website: contact.website || "",
      notes: contact.notes || "",
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (error) {
      toast({ title: "Error deleting contact", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Contact deleted" });
      fetchContacts();
    }
  };

  const filtered = contacts.filter((c) => {
    const matchSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.email || "").toLowerCase().includes(search.toLowerCase()) ||
      (c.business_name || "").toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === "all" || c.contact_type === filterType;
    return matchSearch && matchType;
  });

  const typeBadgeColor = (type: string) => {
    switch (type) {
      case "business": return "default";
      case "vendor": return "secondary";
      case "client": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Contacts</h1>
          <p className="text-sm text-muted-foreground">
            Shared across PromptMe Files, Properties & Spend
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) { setEditingId(null); setForm(EMPTY_FORM); } }}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Add Contact</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Contact" : "New Contact"}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Name *</Label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Display name" />
                </div>
                <div className="space-y-1.5">
                  <Label>Full Name</Label>
                  <Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} placeholder="Legal / full name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Type</Label>
                  <Select value={form.contact_type} onValueChange={(v) => setForm({ ...form, contact_type: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="vendor">Vendor</SelectItem>
                      <SelectItem value="client">Client</SelectItem>
                      <SelectItem value="contractor">Contractor</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Title</Label>
                  <Input value={form.contact_title} onChange={(e) => setForm({ ...form, contact_title: e.target.value })} placeholder="e.g. Manager" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Email</Label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>Email (secondary)</Label>
                  <Input type="email" value={form.email_secondary} onChange={(e) => setForm({ ...form, email_secondary: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <Label>Phone</Label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>Ext</Label>
                  <Input value={form.phone_extension} onChange={(e) => setForm({ ...form, phone_extension: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>Phone (alt)</Label>
                  <Input value={form.phone_secondary} onChange={(e) => setForm({ ...form, phone_secondary: e.target.value })} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Business Name</Label>
                <Input value={form.business_name} onChange={(e) => setForm({ ...form, business_name: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label>Address</Label>
                <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Account #</Label>
                  <Input value={form.account_number} onChange={(e) => setForm({ ...form, account_number: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>Website</Label>
                  <Input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Notes</Label>
                <Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3} />
              </div>
              <Button onClick={handleSave} className="w-full">{editingId ? "Update Contact" : "Save Contact"}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search contacts..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="All types" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="vendor">Vendor</SelectItem>
            <SelectItem value="client">Client</SelectItem>
            <SelectItem value="contractor">Contractor</SelectItem>
            <SelectItem value="government">Government</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Loading contacts...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              {contacts.length === 0 ? "No contacts yet. Add your first contact above." : "No contacts match your search."}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Type</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden md:table-cell">Phone</TableHead>
                  <TableHead className="hidden lg:table-cell">Business</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {c.contact_type === "business" || c.contact_type === "vendor"
                            ? <Building2 className="h-4 w-4 text-primary" />
                            : <User className="h-4 w-4 text-primary" />}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{c.name}</p>
                          {c.contact_title && <p className="text-xs text-muted-foreground">{c.contact_title}</p>}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant={typeBadgeColor(c.contact_type) as any}>{c.contact_type}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm">{c.email || "—"}</TableCell>
                    <TableCell className="hidden md:table-cell text-sm">{c.phone || "—"}</TableCell>
                    <TableCell className="hidden lg:table-cell text-sm">{c.business_name || "—"}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(c)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(c.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
