import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddWorker = () => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");

  const minimumWage = 17002;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (
      enteredWorkerName.trim().length === 0 ||
      enteredWage.trim().length === 0
    )
      return;

    if (+enteredWage < minimumWage) return;
    setEnteredWorkerName("");
    setEnteredWage("");
    console.log(enteredWorkerName.trim(), enteredWage);
  };
  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Çalışan ismi yazınız."
          id="name"
          onChange={(e) => setEnteredWorkerName(e.target.value)}
          value={enteredWorkerName}
        />
        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Maaş miktarı yazınız."
          id="wage"
          onChange={(e) => setEnteredWage(e.target.value)}
          value={enteredWage}
        />
        <Button className="mt-2" type="submit">
          Ekle
        </Button>
      </form>
    </Card>
  );
};

export default AddWorker;
