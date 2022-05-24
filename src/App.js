import React, { useEffect, useState } from "react";
import Area from "./components/Area";
import Item from "./components/Item";

function App() {
  const random = () => {
    return Math.floor(Math.random() * 10000 + 1);
  };
  const [data, setData] = useState([
    {
      id: 1,
      title: "Microsoft",
      color: "#4267B2",
      value: random(),
    },
    {
      id: 2,
      title: "Amazon",
      color: "#ff9900",
      value: random(),
    },
    {
      id: 3,
      title: "Apple",
      color: "#FF0000",
      value: random(),
    },
    {
      id: 4,
      title: "Meta",
      color: "#34a853",
      value: random(),
    },
    {
      id: 5,
      title: "Adobe",
      color: "#002569",
      value: random(),
    },
  ]);

  const sortBiggestData = (data) => {
    return data.sort((veri1, veri2) => veri2.value - veri1.value)[0].value;
  };

  const [bigData, setBigData] = useState(sortBiggestData(data));

  const setDataWithRandom = () => {
    let veri = [...data];
    veri.forEach((item) => {
      item.value += random();
    });
    setBigData(sortBiggestData(data));
    setData(veri);
  };
  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setDataWithRandom();
    }, 4000);
  });

  const renderDatas = (item, index) => {
    let rate = item.value / bigData;
    rate = rate * (1000 - 40);
    const percent = (rate * 100) / 1040;
    return (
      <Item
        key={item.id}
        backgroundColor={item.color}
        width={percent + "%"}
        text={item.title}
        count={item.value}
        top={(index === 0 ? 20 : index * 40 + 20) + "px"}
      />
    );
  };

  return (
    <>
      <div className="container">
        <h1>Number of annual users of the top 5 companies</h1>
      </div>
      <Area data={data}>
        {data.map((item, index) => renderDatas(item, index))}
      </Area>
    </>
  );
}

export default App;
