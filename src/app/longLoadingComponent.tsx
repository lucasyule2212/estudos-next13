
export default async function LongLoadingComponent() {
  await new Promise(resolve => setTimeout(resolve, 4000))
  return (
    <div>LongLoadingComponent
      <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error nam sed. Est consequuntur officiis animi odit, quae illo ipsam dolor. Cumque nulla omnis accusamus doloremque nobis quidem itaque repellat.</strong>
    </div>
  )
}
