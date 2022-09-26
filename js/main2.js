// Bai 3
document.getElementById("btnSubmit3").onclick = function () {
  // input: nhập gía trị soNhap3
  var soNhap3 = +document.getElementById("soNhap3").value;

  //ouput giaiThua3
  var giaiThua3 = 1;

  /**progress
   * -Khởi tạo: i bắt đầu từ 1
   * - Điều kiện: i <= soNhap3
   * - Bước nhảy: i++
   */
  var i = 1;

  for (i = 1; i <= soNhap3; i++) {
    giaiThua3 *= i;
  }

  document.getElementById("ketQua3").innerHTML = giaiThua3;
};

// Bai 2
document.getElementById("btnSubmit2").onclick = function () {
  // input: nhập gía trị X & N
  var soNhapX = +document.getElementById("soNhapX").value;
  var soNhapN = +document.getElementById("soNhapN").value;

  //ouput giaTriTong
  var giaTriTong2 = 0;

  /**progress
   * -Khởi tạo: i=1
   * - Điều kiện: i <= soNhapN
   * - Bước nhảy: i++
   */
  var i = 1;

  for (i = 1; i <= soNhapN; i++) {
    giaTriTong2 += Math.pow(soNhapX, i);
  }

  document.getElementById("ketQua2").innerHTML = giaTriTong2;
};

// Bai 1
document.getElementById("btnSubmit1").onclick = function () {
  // input: nhập gía trị number
  var tong = 0;
  var n;
  for (var i = 1; i <= 10000; i++) {
    tong += i;
    if (tong > 10000) {
      n = i;
      break;
    }
  }
  document.getElementById("ketQua1").innerHTML = n;
};

// Bai 4
document.getElementById("btnSubmit4").onclick = function () {
  var soLuongDiv = 10;
  var ketQua = document.querySelector("#ketQua4");
  for (var i = 1; i <= soLuongDiv; i++) {
    if(i%2 === 0) {
      var div = document.createElement("div");
      div.textContent = "Div chẵn";
      div.className = "p-2 bg-success text-white";
      ketQua.append(div);
    }
    else {
      var div = document.createElement("div");
      div.textContent = "Div lẻ";
      div.className = "p-2 bg-danger text-white";
      ketQua.append(div);
    }
  }
};

// Bai 5
//hàm kiểm tra snt
function checkSNT (number) {
  //giả sử mọi số đều là SNT
  var result = true;
  //các số nhỏ hơn 2 ko phải là SNT
  if(number < 2) {
    result = false;
  }
  else {
    //lúc này number = 2 dc là do biểu thức điều kiện, i = 2 rồi ko thể < number dc nữa nên vòng lặp sẽ ko chạy -> result vẫn là true
    for (var i = 2; i < number; i++) {
      if(number%i === 0){
        result = false;
        break;
      }
    }
  }
  //cứ true là snt
  return result;
}

document.getElementById("btnSubmit5").onclick = function () {
  
  var soNhap = +document.getElementById("soNhap5").value;

  var ketQua = document.querySelector("#ketQua5");

  //tạo mảng chứa các snt
  var arr = new Array();

  for (var i = 2; i <= soNhap; i++) {
    //lần lượt ktra các số từ 2 đến số đã nhập vào, nếu là true thì push vào mảng
    if(checkSNT(i) === true) {
      arr.push(i);
    }
  }
  //xuất ra html
  ketQua.innerHTML = arr.join(", ");
};

// <!-- -------BT Mảng -------- -->

//đây là mảng chính sẽ sử dụng xuyên suốt bài
var arr = [];
document.getElementById("btnThemSo").onclick = function () {
  var mangGT = document.getElementById("mangGT").value;

    //add số mới vào chuỗi đầu bài
    arr.push(Number(mangGT));

    document.getElementById("ketQuaMang").innerHTML = arr.join(", ");

    // document.getElementById("mangGT").value = "";
};

// BT1
//button tổng
document.getElementById("btnKetQua1").onclick = function () {
  //input: lấy giá trị number từ mảng arr 
  var result1 = 0;
  //xử lý
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
      result1 += arr[j];
    } else {
      alert("khong the thuc hien- vui lòng nhập lại số dương");
    }
  }

  //output: trả ra result là tổng các số dương
  document.getElementById("result1").innerHTML = result1;
};

// BT2
document.getElementById("btnKetQua2").addEventListener("click", function () {

//input:  duyệt mảng arr
var count2 = 0;
//progress
for (var i = 0; i < arr.length; i++) {
  if(arr[i] > 0) {
  count2 ++;
  } else {
    alert("không thể thực hiện được lệnh");
  }
}
//output: result2 là kết quả đếm được có bao nhiêu số dương
var result2 = "Số dương: " + count2;
document.getElementById("result2").innerHTML = result2;
})

// BT3
document.getElementById("btnKetQua3").addEventListener("click", function () {

  //input:  duyệt mảng arr
  var min3 = arr[0];
  var index3 = 0;
  //progress
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] < min3) {
    min3 = arr[i];
    index3 = i;
    } 
    }
    //output: result3 là kết quả số nhỏ nhất
    var result3= "Số nhỏ nhất: " + min3;

  document.querySelector("#result3").innerHTML = result3;
  })

// BT4
document.getElementById("btnKetQua4").addEventListener("click", function () {

  //input:  duyệt mảng arr
  var min4 = arr[0];
  var index4 = 0;
  //progress
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] < min4 && arr[i] > 0) {
    min4 = arr[i];
    index4 = i;
    } 
    }
    //output: result4 là kết quả số dương nhỏ nhất
    var result4= "Số dương nhỏ nhất: " + min4;

  document.querySelector("#result4").innerHTML = result4;
  })

// BT5
document.getElementById("btnKetQua5").addEventListener("click", function () {

  //input:  duyệt mảng arr
  /**Duyệt mảng arr >> có số chẵn
   * tạo mảng mới >>push các số chẵn này vào
   * lấy phần tử cuối của mảng mới
   * trả ra kết quả
   */
  var newArr5 = [];
  var newEven5 = 0;
      //progress
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] % 2 === 0) 
    {
    newArr5.push(arr[i]);
    } 
    }
  newEven5 = newArr5.pop();
    //output: result5 là kết quả số chẵn cuối cùng
  var result5= "Số chẵn cuối cùng: " + newEven5;

  document.querySelector("#result5").innerHTML = result5;
  })

// BT7
  document.getElementById("btnKetQua7").addEventListener("click", function () {

    //input: giá trị mảng arr
    //output: result7 là kết quả số chẵn cuối cùng
    //progress
        
    var result7 = arr.sort(function(a, b){return a - b});

    document.querySelector("#result7").innerHTML = "Mảng sau khi sắp xếp: " + result7;
    })
