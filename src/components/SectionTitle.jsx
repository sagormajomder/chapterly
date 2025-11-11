export default function SectionTitle({ title, desc }) {
  return (
    <div className='text-center mb-10'>
      <h2 className='heading-secondary'>{title}</h2>
      <p className='text-lg'>{desc}</p>
    </div>
  );
}
