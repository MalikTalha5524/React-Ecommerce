import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./BlogData";

export default function BlogDetails() {
  const { id } = useParams();
  const selectedBlog = blogs.find((blog) => blog.id === parseInt(id));
  console.log(selectedBlog);
  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }
  //  console.log(selectedBlog);
  return (
    <>
      <div className="px-4 md:px-20 pt-10 flex w-full">
        <div className="w-1/3">
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-auto object-cover border rounded-lg mb-4"
          />
        </div>
        <div className="w-2/3 p-10">
          <h2 className="text-4xl font-bold mb-4">{selectedBlog.heading}</h2>
          <p className="text-lg text-gray-600 mb-4">{selectedBlog.content}</p>
          <p className="text-lg mb-8">{selectedBlog.paragraph}</p>
          <p className="text-lg font-semibold mb-2 mt-4">
            Author: {selectedBlog.author}
          </p>
          <p className="text-lg font-semibold mb-4">
            Date: {selectedBlog.date}
          </p>
        </div>
      </div>
      <div className="px-4 md:px-20 pb-10">
        <p>
          The cotton-jesery Zip-Up Hoodie adipisicing elit. Modi provident
          architecto a perferendis voluptate blanditiis aliquid tempore rem
          dolor debitis veniam ab totam impedit, animi obcaecati delectus. Sit
          impedit sint ipsa nulla saepe. Cumque minima sunt praesentium
          consequuntur natus et repellendus dicta facere corrupti sed expedita,
          harum aut consectetur dolore officia veritatis dolorum nulla molestiae
          asperiores, blanditiis assumenda reiciendis illo. Deserunt ex itaque
          saepe magni qui, quae velit provident repellat sed, illo dignissimos!
          Non culpa excepturi doloremque sapiente, odio autem suscipit,
          obcaecati nihil neque fuga necessitatibus asperiores rerum dignissimos
          assumenda id adipisci officia qui ut quasi quaerat! Eveniet nam porro,
          exercitationem mollitia reprehenderit magnam molestiae animi nesciunt
          beatae consequuntur nulla dolorem, provident reiciendis rem, debitis
          quia nobis illo aperiam adipisci suscipit officiis est? Perspiciatis
          cupiditate eum aperiam ut harum, quam tempora molestias sunt porro
          fuga culpa, veritatis consequuntur placeat itaque ullam voluptatum
          animi. Facilis veritatis ipsum odit nostrum nulla tempora eaque ad id
          nisi odio. Ipsum numquam dolor maiores delectus debitis est ratione
          qui magni architecto aperiam neque dolorem eveniet quo, officia aut,
          necessitatibus impedit placeat, enim dolores dignissimos amet dicta
          ullam doloribus libero? Earum temporibus quia, optio veritatis dolore
          quos consequatur officia saepe ex, quae cumque quidem ullam vel odit
          culpa iure quasi molestias ut porro quibusdam voluptas eius cum modi.
          Adipisci facere, ab quibusdam qui distinctio id nesciunt nihil
          voluptatem omnis alias tenetur voluptatibus quod hic, ut fugiat enim
          debitis esse? Accusantium velit quod obcaecati fugiat officiis
          dignissimos facere quo repellat laboriosam nam. Maxime pariatur
          molestiae quaerat sed harum officiis laboriosam sapiente magnam
          explicabo adipisci fuga, temporibus, laudantium tenetur recusandae.
          Magni aspernatur dignissimos velit nihil amet, dicta sint molestiae
          voluptas temporibus, voluptatibus deleniti. Necessitatibus nemo illo
          ullam sapiente ut, dolore modi velit nobis iste quos reiciendis non
          corrupti aliquid. In provident accusamus vel error, maiores atque
          ipsum dicta.
        </p>
      </div>
    </>
  );
}
