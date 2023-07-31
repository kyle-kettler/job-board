type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="border rounded-md py-1 px-2 hover:bg-gray-100 transition-colors">
      {text}
    </div>
  );
}
