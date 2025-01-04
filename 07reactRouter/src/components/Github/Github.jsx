import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/mandliyarajendra11`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GIthub Follower :{data.followers}
        <img src={data.avatar_url} alt="" />
      </div>
    </>
  );
}

export default Github;
