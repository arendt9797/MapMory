export const makeConfirmedIcon = (number) => {
  return `
          <div style="
            position: relative;
            background-color: #007bff;
            color: white;
            border: 1px solid #0056b3;
            padding: 6px;
            border-radius: 50%;
            font-weight: bold;
            font-size: 14px;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
            ${number}
            <div style="
              position: absolute;
              bottom: -8px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-top: 10px solid #007bff;
            "></div>
          </div>`;
};

export const makeTempIcon = () => {
  return `
          <div style="
            position: relative;
            background-color: gray;
            color: white;
            border: 1px solid gray;
            padding: 6px;
            border-radius: 50%;
            font-weight: bold;
            font-size: 14px;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
            ?
            <div style="
              position: absolute;
              bottom: -8px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-top: 10px solid gray;
            "></div>
          </div>`;
};

export const myLocationIcon = () => {
  return `
            <div style="position: relative;  padding: 10px; background-color: #67BCC4; color: white; font-size: 14px; font-weight: bold; border-radius: 10px; text-align: center;">
              내위치
              <div style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #67BCC4;"></div>
            </div>
          `;
};

export const addLocationIcon = () => {
  return `
          <div style="width: 60px; height: 60px; border:3px dashed #486284; background-color: #67BCC4; color: white; display: flex;justify-content: center; align-items: center; border-radius: 50%; font-size: 14px; font-weight: bold; text-align:center;">
            여기로<br>갈까요?
          </div>
        `;
};
