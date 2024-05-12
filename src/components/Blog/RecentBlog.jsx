import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const RecentBlog = ({ id, time, title, image, plainTextDescription }) => {
  return (
    <div className="card relative w-full border h- rounded-lg">
      <Link href={`/blogs/${id}`}>
        <div className="w-full card">
          <figure>
            <img
              src={image}
              className="object-cover w-full h-[30rem] rounded-lg"
              alt="Blog Image"
            />
          </figure>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 h-64  flex items-start justify-center flex-col rounded-lg">
          <p className=" text-white font-bold text-4xl mt-8">{title}</p>
          <div className="line-clamp-2 text-white my-2">
            <p>{plainTextDescription}</p>
          </div>

          <p className="text-gray-300">{time}</p>
        </div>
      </Link>
    </div>
  );
};

export default RecentBlog;
