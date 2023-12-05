import { Suspense } from "react";
import LongLoadingComponent from "./longLoadingComponent";
import MainPageContent from "./mainPageContent";

export default async function HomePage() {
 

  return (
    <div>
      <strong>
        Catalog content: <br />
      </strong>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam! Cupiditate harum ducimus quis autem molestiae laborum voluptates voluptatem error fugiat in ad odio sed, aut consequuntur consequatur tempora cumque.</p>
      <Suspense fallback={'Carregando LongLoadingComponent...'}>
        <LongLoadingComponent/>
      </Suspense>
      <Suspense fallback={'Carregando MainPageContent...'}>
        <MainPageContent />
      </Suspense>
    </div>
  )
}
