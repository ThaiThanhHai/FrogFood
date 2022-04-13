export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Tên loại",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "link",
    headerName: "Link",
    width: 230,
    renderCell: (params) => {
      return <textarea className="cellImage">{params.row.image}</textarea>;
    },
  },
  {
    field: "time",
    headerName: "Thời gian",
    width: 230,
    renderCell: (params) => {
      return <div className="cellTime">{params.row.time}</div>;
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },

  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
  {
    id: 1,
    name: "Burger",
    time: "04-14-2020-01:34:30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKqUiGGRyIAvPndoiSQB_5_4crdQb4N6gekBJvRraawVWNWEH2ES-avOWZBMryVY45tM&usqp=CAU",
  },
];
