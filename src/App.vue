<!-- template Start -->
<template>

<!-- 네이버지도 -->
<img src = "./assets/logo.png" class = "room-img">
 
<br><br>

<!-- 기능버튼 -->
<input type = "button" value = "추가">
<input type = "button" value = "삭제">
<input type = "button" value = "수정">
<input type = "button" value = "열기">
<input type = "button" value = "닫기">
<input type = "button" value = "설정">
<br><br>



<table border="1px">
  <th><input type ="checkbox"></th>
  <th>구분</th>
  <th>이름</th>
  <th>넓이<br>/종자</th>
  <th>설정값</th>
  <th>상태</th>
  <th>위치</th>

  
 <tr v-for="database3 in database3" :key="database3">
        <td><input type="checkbox"></td>
        <td><span v-html="database3.name1"></span></td>
        <td><span v-html="database3.name2"></span></td>
        <td><span v-html="database3.square"></span><br><span v-html="database3.seed"></span></td>
        <td><span v-html="database3.setlow"></span><br><span v-html="database3.sethigh"></span></td> 
        <td><span v-html="database3.nowpos"></span><br><span v-html="database3.nowcon"></span></td> 
        <td><input type="button"></td>

 
      </tr>
  



</table>

<!-- 표만들기 end -->

</template>
<!-- template end -->


<!-- Script start -->
<script>
// Data import관리
import data3 from './assets/database3.js'; 
// document.getElementById().innerHTML = ?? // 데이터 바인딩 JS 데이터를 HTML에 꽂아 넣음

// Data export 관리
export default {
  name: 'App',
  data() // 데이터는 objct
  {     
    return {
      database3 : data3, // 외부데이터 import (tot data)
           }
  },


// 함수관리
  methods :{
    countaa(){
      this.신고수++;
        },

  
  },

  components: {

  }
}
</script>
<!-- Script end -->

<!-- Style start -->
<style>
.black-bg {
  width : 100%; height :100%;
  background : rgba(0,0,0,0,5);
  position : fixed; padding : 20px;
}

 .white-bg {
  width : 100%;
  background : white(0,0,0,0,5);
  border-radius : 8px; 
  padding : 20px;
 
}

.room-img{
  width : 40%;
  margin-top : 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 10px; */
}

.menu{
  background : darkslateblue;
  padding : 15px;
  border-radius : 10px;
}

.menu a {
color : white;
padding : 10px;
}




</style>
<!-- Style end -->