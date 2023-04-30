import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/session'
// import { EmptyPlaceholder } from "@/components/empty-placeholder"
// import { DashboardHeader } from "@/components/header"
// import { PostCreateButton } from "@/components/post-create-button"
// import { PostItem } from "@/components/post-item"
// import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  // const posts = await db.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: 'desc',
  //   },
  // })

  return (
    <main>
      <h1 className="text-center text-3xl font-bold">This is the content of dashboard page</h1>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus eius eum exercitationem hic in
        incidunt nihil nisi, praesentium, quaerat quas quos soluta tempora totam unde? Ad aspernatur eveniet illum neque
        temporibus. Aperiam autem blanditiis consequatur corporis dicta doloremque dolorum enim fuga ipsa laborum magnam
        minus necessitatibus nemo nobis non nulla officia pariatur perspiciatis porro repellat repellendus saepe sint
        tempore, veritatis voluptates. Debitis dolorem ducimus esse est eum iure minus molestiae, nam neque non numquam
        officia quos ratione reiciendis rerum sed similique ut velit. Aut delectus dolorum maxime necessitatibus neque
        possimus quas quia reprehenderit voluptatem voluptatum! Animi consectetur ducimus magnam nihil, rem saepe sint!
        Aspernatur laudantium nulla officiis rerum sapiente sit suscipit? Necessitatibus nihil numquam placeat. Ad
        adipisci at aut blanditiis consequuntur delectus deserunt, dolor earum esse illum incidunt ipsa laborum minus
        nisi perferendis qui sit tempore unde vero voluptates? Blanditiis commodi, debitis ea et exercitationem,
        expedita, illo incidunt laboriosam magnam nostrum perspiciatis possimus quidem reprehenderit sequi suscipit
        tempora velit. Animi consectetur impedit magnam odio, omnis pariatur praesentium quod repudiandae temporibus
        ullam! Architecto cupiditate hic omnis quidem. Ab accusamus aliquam aperiam asperiores atque commodi culpa
        cumque delectus dignissimos dolore eaque error, esse eum excepturi illum iusto laudantium, libero magnam,
        maiores maxime mollitia numquam officiis optio praesentium quaerat repellendus reprehenderit tenetur velit
        veritatis voluptate. Beatae dolorem ex iste laboriosam, maxime neque vel! A ab aut beatae, consequatur cum
        deserunt ducimus eligendi fugit hic id ipsam ipsum iste iusto obcaecati optio rerum similique sit sunt suscipit,
        tempora unde voluptates voluptatum! At, enim.
      </p>
    </main>
  )
}
