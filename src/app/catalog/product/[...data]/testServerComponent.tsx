
export default async function TestServerComponent() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <div>
      This is a
      <strong> server component </strong>
      rendered inside a Client Component
    </div>
  )
}
