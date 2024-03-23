import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();

  const minimumWage = 17002;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz",
      });
      return;
    }

    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: "Lütfen bir maaş giriniz",
      });
      return;
    }

    if (+enteredWage < minimumWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`,
      });
      return;
    }
    setEnteredWorkerName("");
    setEnteredWage("");
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    console.log(enteredWorkerName.trim(), enteredWage);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
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
    </div>
  );
};

export default AddWorker;
