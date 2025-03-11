import React from "react";

export default function Cards() {
  return (
    // <div className="p-4 shadow-md rounded-lg bg-white">
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius sed
    //   odit voluptatibus eum laboriosam officia, quasi incidunt assumenda
    //   adipisci dolorum, repellendus commodi facilis doloremque aliquam nisi
    //   tempora fugiat dolore ducimus veritatis debitis quidem beatae. Non
    //   reprehenderit harum natus aliquam nihil, sint necessitatibus dignissimos
    //   consequatur autem fugiat maiores
    //   <p>
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tenetur
    //     accusantium quis dolor! Enim numquam corrupti consectetur voluptate
    //     porro neque vitae voluptas doloremque maxime! Quae beatae eius,
    //     voluptate similique sit nostrum quia impedit consequatur, possimus fuga
    //     quisquam, eum quam corporis sequi hic commodi ad ipsa nesciunt
    //     doloremque? Recusandae delectus
    //   </p>
    // </div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-100"
        src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?t=st=1741247614~exp=1741251214~hmac=7e6245d0307d6cbd45308de41031ab91c3247378bec3f3004206b0e97d01424c&w=2000"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base line-clamp-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #sidedish
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #italian
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #pasta
        </span>
      </div>
    </div>
  );
}
