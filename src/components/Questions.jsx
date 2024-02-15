import React, { useState } from "react";
import { BsClipboard } from "react-icons/bs";
import { MdCheckBox } from "react-icons/md";
import { Text } from "react";

import question_1 from "../assets/question_1.png";
import question_2 from "../assets/question_2.png";
import question_3 from "../assets/question_3.png";
import question_4 from "../assets/question_4.png";
import question_5 from "../assets/question_5.png";
import question_6 from "../assets/question_6.png";
import question_7 from "../assets/question_7.png";
import question_8 from "../assets/question_8.png";
import question_9 from "../assets/question_9.png";
import question_10 from "../assets/question_10.png";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Questions() {
  const questions_data = [
    {
      image: question_1,
      title: "Câu 1",
      question: `Viết code, một dòng cho mỗi yêu cầu sau: \n
      Tạo một đối tượng User trống.\n
      Thêm thuộc tính name với giá trị Hoang.\n
      Thêm thuộc tính surname với giá trị Viet.\n
      Thay đổi giá trị của name thành Bui.\n
      Xóa thuộc tính name khỏi đối tượng.`,
      content: `
      let user = {};
      user["name"] = "Hoang";
      user["surname"] = "Viet";
      user.name = "Bùi";
      delete user.name // delete user["name"];`,
    },
    {
      image: question_2,
      title: "Câu 2",
      question: `let salaries = {
        Bui: 1200,
        Viet: 1600,
        Hoang: 1350
      }
      Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng.`,
      content: `
      var totalSalary;
      let s = Object.values(salaries);
      function sumArray(mang){
          let sum = 0;
          mang.forEach(function(value){
              sum += value;
          });
           
          return sum;
      }
      console.log(sumArray(s));`,
    },
    {
      image: question_3,
      title: "Câu 3",
      question: `[Input]:
      let menu = {
        width: 200,
        height: 300,
        name: "Bui Viet Hoang"
      };
      Tạo function multiplyNumeric(obj) nhân tất cả các thuộc tính số của object menu với 2.
      [Output]:
      menu = {
        width: 400,
        height: 600,
        name: "Bui Viet Hoang"
      };`,
      content: `
      let menu = {
        width: 200,
        height: 300,
        name: "Bui Viet Hoang"
      };
      const multiplyNumeric = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] == 'number') {
              obj[key] *= 2;
            }
        }
      };

      console.log(multiplyNumeric(menu));`,
    },
    {
      image: question_4,
      title: "Câu 4",
      question: `Tạo mảng có tên là styles với các mục "Jazz" và "Blues".
      Thêm "Rock-n-Roll" vào cuối.
      Thay thế giá trị ở giữa bằng "Classics". Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
      Tách giá trị đầu tiên của mảng và hiển thị nó.
      Thêm trước Rap và Reggae vào mảng.
      [Output]:
      Jazz, Blues
      Jazz, Blues, Rock-n-Roll
      Jazz, Classics, Rock-n-Roll
      Classics, Rock-n-Roll
      Rap, Reggae, Classics, Rock-n-Roll`,
      content: `
      let styles = ["Jazz", "Blues"];
      styles.push("Rock-n-Roll");
      styles[Math.floor((styles.length - 1) / 2)] = "Classics";
      alert( styles.shift() );
      styles.unshift("Rap", "Reggae");`,
    },
    {
      image: question_5,
      title: "Câu 5",
      question: `Viết hàm camelize(str) để thay đổi các từ được phân tách bằng dấu gạch ngang như "my-short-string" thành "myShortString" được viết bằng camel.
      [Output]:
      camelize("background-color") == 'backgroundColor';
      camelize("list-style-image") == 'listStyleImage';
      camelize("-webkit-transition") == 'WebkitTransition';`,
      content: `
      const camelize = (str) => {
        return str
          .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
          .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
          )
          .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
      }`,
    },
    {
      image: question_6,
      title: "Câu 6",
      question: `Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b. Nghiệm là: a ≤ arr[i] ≤ b.`,
      content: `
      const filterRange = (arr, a, b) => {
        for (let i = 0; i < arr.length; i++) {
          let val = arr[i];
      
          // remove if outside of the interval
          if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
          }
        }
      }`,
    },
    {
      image: question_7,
      title: "Câu 7",
      question: `
          let initArray = [
              { name: "Bui", age: 25 },
              { name: "Viet", age: 26 },
              { name: "Hoang", age: 27 },
              { name: "Bui2" },
              { age: 20 },
              { name: "Hoang2", age: 18 }
          ];
          Viết code chuyển đổi sang 1 mảng chỉ chứa name`,
      content: `
      let initArray = [
        { name: "Bui", age: 25 },
        { name: "Viet", age: 26 },
        { name: "Hoang", age: 27 },
        { name: "Bui2" },
        { age: 20 },
        { name: "Hoang2", age: 18 }
      ];
      let newArray = [];
      initArray.forEach( item => {
        newArray.push(item.name);
      });
      console.log(newArray);
    `,
    },
    {
      image: question_8,
      title: "Câu 8",
      question: `Cùng là mảng initArray ở câu 7.
      Viết function getAverageAge(arr) trả về tuổi trung bình.`,
      content: `
      let initArray = [
        { name: "Bui", age: 25 },
        { name: "Viet", age: 26 },
        { name: "Hoang", age: 27 },
        { name: "Bui2" },
        { age: 20 },
        { name: "Hoang2", age: 18 }
      ];
      const getAverageAge = (arr) => {
        let newArray = [];
        arr.forEach(item => {
          newArray.push(item.age);
        });
        const avarageAge = newArray.reduce((acc, item) => acc + item.age) / newArray.length;
        return avarageAge;
      }
      console.log(getAvarageAge(initArray));`,
    },
    {
      image: question_9,
      title: "Câu 9",
      question: `let flattened = [[1, 2], [3, 4], [5, 6]];
      Viết function trả về mảng đã được làm phẳng.
      [Output]: [1, 2, 3, 4, 5, 6]`,
      content: `
      const flatten = (arr) => {
        return arr.reduce((pre, cur) => {
          return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
        }, [])
      }
      let arr = [1, 2, [3, 4], [5, [6, 7]]]
      console.log(flatten(arr))`,
    },
    {
      image: question_10,
      title: "Câu 10",
      question: `Xây dựng chương trình có một ô input, một button. Sau khi nhập giá trị số vào ô input, click vào button thì in các số từ 1 tới giá trị của ô input ra màn hình. Nếu không nhập vào ô input, click button sẽ in số 1 + "Vui lòng nhập giá trị số vào ô input".`,
      content: `<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <script language="javascript">
            const print_number = () =>
            {
                // Lấy number
                var number = document.getElementById("number").value;
                if (typeof number === "number")
                  {
                    var html = '';
                    for (var i = 1; i <= number; i++){
                      html += i + ' <br/>';
                  }
                   document.getElementById("result").innerHTML = html;
                  }
                else {
                  var html = ' 1 Vui lòng nhập giá trị số vào ô input';
                  document.getElementById("result").innerHTML = html;
                }
                
            }
        </script>
        <form method="get" action="">
            Nhập số: <input type="text" id="number" value="0"/>
            <input type="button" value="In kết quả" onclick="print_number()"/>
        </form>
        <div id="result">

        </div>
    </body>
</html>`,
    },
  ];
  const [copy, setCopy] = useState(false);
  return (
    <div className="questions-container">
      {questions_data.map(({ image, title, question, content, index }) => (
        <div className="question" key={index}>
          <div className="container">
            <div className="background">
              <div className="ellipse pink"></div>
              <div className="ellipse blue"></div>
            </div>
            <div className="content">
              <div className="image">
                <img src={image} alt="icon" />
              </div>
              <h2 className="title">{title}</h2>
              <p className="description">{question}</p>
            </div>
          </div>
          <div className="code">
            <div className="code-navbar">
              <p> Answer: </p>
              {copy ? (
                <button>
                  {" "}
                  <MdCheckBox /> &nbsp; Copied{" "}
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(content);
                    setCopy(true);
                    setTimeout(() => {
                      setCopy(false);
                    }, 3000);
                  }}
                >
                  {" "}
                  <BsClipboard /> &nbsp; Copy Code{" "}
                </button>
              )}
            </div>
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              customStyle={{ padding: "25px" }}
              wrapLongLines={true}
            >
              {content}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
}
