type FormSuccessProps = {
  companyName: string;
};

export default function FormSuccess({ companyName }: FormSuccessProps) {
  return (
    <div className="flex justify-center bg-stone-300 z-10 rounded-lg p-12 text-center text-lg">
      <p>
        Thank you for applying! Your application has been sent to {companyName}
      </p>
    </div>
  );
}
