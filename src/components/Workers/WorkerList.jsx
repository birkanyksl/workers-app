import React from "react";
import Card from "../UI/Card";

const WorkerList = () => {
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2 ">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        <li className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow">
          <span>Birkan Yüksel</span>
          <span className="text-teal-700 font-medium">20000₺</span>
        </li>
      </ul>
    </Card>
  );
};

export default WorkerList;
