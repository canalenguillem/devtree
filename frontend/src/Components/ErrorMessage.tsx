type ErrorMessagePops = {
  children: React.ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessagePops) {
  return (
    <>
      <p className=" bg-red-50 text-red-600 text-sm font-bold uppercase text-center">
        {children}
      </p>
    </>
  );
}
