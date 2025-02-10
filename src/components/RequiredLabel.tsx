export const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-medium text-neutral-300 text-left">
    {children} <span className="text-red-500">*</span>
  </label>
) 