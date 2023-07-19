import FormComponent from "./form";

function GuestBookPage() {
  return (
    <section className="p-3 max-w-2xl mx-auto">
      <h1 className="text-2xl p-3 mt-5 text-neutral-100">deja tu comentario</h1>
      <FormComponent />
    </section>
  );
}

export default GuestBookPage;
