import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Plus, RefreshCw, Sparkles } from "lucide-react";

export const Route = createFileRoute("/admin/inquiries")({
  component: AdminInquiries;
});

function AdminInquiries() {
  return null;
}
