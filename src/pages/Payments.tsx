
import React, { useState } from "react";
import { useData } from "@/context/DataContext";
import { Payment, Member } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PaymentsList } from "@/components/payments/PaymentsList";
import { PaymentsFilter } from "@/components/payments/PaymentsFilter";
import { AddPaymentDialog } from "@/components/payments/AddPaymentDialog";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Payments = () => {
  const { payments, members } = useData();
  const [filteredPayments, setFilteredPayments] = useState<Payment[]>(payments);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false);
  const { toast } = useToast();

  // Filter payments based on search term and status
  const filterPayments = (term: string, status: string) => {
    setSearchTerm(term);
    setStatusFilter(status);

    let filtered = payments;

    // Filter by status
    if (status !== "all") {
      filtered = filtered.filter((payment) => payment.status === status);
    }

    // Filter by search term
    if (term.trim() !== "") {
      const searchTermLower = term.toLowerCase();
      filtered = filtered.filter((payment) => {
        const member = members.find((m) => m.id === payment.memberId);
        return (
          payment.id.toLowerCase().includes(searchTermLower) ||
          member?.firstName.toLowerCase().includes(searchTermLower) ||
          member?.lastName.toLowerCase().includes(searchTermLower) ||
          payment.description?.toLowerCase().includes(searchTermLower) ||
          payment.method.toLowerCase().includes(searchTermLower)
        );
      });
    }

    setFilteredPayments(filtered);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <Button onClick={() => setIsAddPaymentOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Payment
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Payment Records</CardTitle>
        </CardHeader>
        <CardContent>
          <PaymentsFilter
            searchTerm={searchTerm}
            statusFilter={statusFilter}
            onFilter={filterPayments}
          />
          <PaymentsList payments={filteredPayments} members={members} />
        </CardContent>
      </Card>

      <AddPaymentDialog
        open={isAddPaymentOpen}
        onOpenChange={setIsAddPaymentOpen}
        members={members}
        onSuccess={() => {
          toast({
            title: "Payment Added",
            description: "The payment has been successfully recorded",
          });
        }}
      />
    </div>
  );
};

export default Payments;
