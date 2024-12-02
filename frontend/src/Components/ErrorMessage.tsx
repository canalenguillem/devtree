export default function ErrorMessage({ children }) {
  return (
    <>
      <div>
        <p className="text-red-500">{children}</p>
      </div>
    </>
  );
}
