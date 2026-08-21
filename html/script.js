
const students = [
  { name: "Amir Bishwokarma", class: "5", address: "Devchuli-10", studentPhone: "9811954067" },
  { name: "Amrit Gurung", class: "5", address: "Devchuli-14", studentPhone: "9821957790" },
  { name: "Bhumika Sunari Magar", class: "5", address: "Devchuli-14", studentPhone: "9876435611" }, // Corrected to 10 digits
  { name: "Bijaya Kafle", class: "5", address: "Devchuli-11", studentPhone: "9815439495" },
  { name: "Bipsana Thapa", class: "5", address: "Devchuli-11", studentPhone: "9841413062" },
  { name: "Ghanishta Sunar", class: "5", address: "Devchuli-14", studentPhone: "9804436745" },
  { name: "Kushal Ranabhat", class: "5", address: "Devchuli-14", studentPhone: "9825762299" },
  { name: "Manisha Tumsing", class: "5", address: "Devchuli-11", studentPhone: "9768375112" },
  { name: "Mausam Maski Magar", class: "5", address: "Devchuli-14", studentPhone: "9743480615" },
  { name: "Nikesh Kanhug Magar", class: "5", address: "Devchuli-14", studentPhone: "9821059262" },
  { name: "Parbati Kumal", class: "5", address: "Devchuli-14", studentPhone: "9821440979" },
  { name: "Prakash Sapkota", class: "5", address: "Devchuli-13", studentPhone: "9867836951" },
  { name: "Prayas Gurung", class: "5", address: "Devchuli-13", studentPhone: "9860299147" },
  { name: "Puja Thapa Magar", class: "5", address: "Devchuli-14", studentPhone: "9811556213" },
  { name: "Sabin B.K", class: "5", address: "Devchuli-14", studentPhone: "9764537090" },
  { name: "Samjhana Gharti Magar", class: "5", address: "Devchuli-14", studentPhone: "9704208541" },
  { name: "Smile Nepali", class: "5", address: "Devchuli-14", studentPhone: "9867111056" },
  { name: "Soniya Sherstha", class: "5", address: "Devchuli-11", studentPhone: "9805108943" },
  { name: "Sophia Sunar", class: "5", address: "Devchuli-11", studentPhone: "9805455751" },
  { name: "Subin Tamang", class: "5", address: "Devchuli-11", studentPhone: "9825493490" },
  { name: "Sulav B.K", class: "5", address: "Devchuli-13", studentPhone: "9855055505" },
  { name: "Sushila Ranabhat", class: "5", address: "Devchuli-14", studentPhone: "9867043303" },
  { name: "Sushma Tamang", class: "5", address: "Devchuli-14", studentPhone: "9806549440" },
  { name: "Umanga Thada", class: "5", address: "Devchuli-11", studentPhone: "9825483438" },
  { name: "Unisha Bk", class: "5", address: "Devchuli-14", studentPhone: "9708570683" },
  
  
  //Class 8A
  { name: "Anshu Rai", class: "8'A'", address: "Devchuli-13", studentPhone: "9843910043" },
  { name: "Asbina Rana Magar", class: "8'A'", address: "Devchuli-11", studentPhone: "9765397890" },
  { name: "Asim Bista Magar", class: "8'A'", address: "Devchuli-11", studentPhone: "9843203802" },
  { name: "Bibisa Ghimire", class: "8'A'", address: "Devchuli-13", studentPhone: "9867693541" },
  { name: "Bishal Sunar", class: "8'A'", address: "Devchuli-14", studentPhone: "9812962521" },
  { name: "Bishnu Sing Konwar", class: "8'A'", address: "Devchuli-14", studentPhone: "9827563612" },
  { name: "Himal Gurung", class: "8'A'", address: "Devchuli-14", studentPhone: "9716057419" },
  { name: "Icchya Barawal", class: "8'A'", address: "Devchuli-14", studentPhone: "9820277613" },
  { name: "Icchya Bayambu Magar", class: "8'A'", address: "Devchuli-11", studentPhone: "9844781584" },
  { name: "Jyoti Nepali", class: "8'A'", address: "Devchuli-11", studentPhone: "9825482928" },
  { name: "Khum Maya Gaha Magar", class: "8'A'", address: "Devchuli-14", studentPhone: "9811474867" },
  { name: "Kismat Tamang", class: "8'A'", address: "Devchuli-14", studentPhone: "9866379956" },
  { name: "Kripa Thapa", class: "8'A'", address: "Devchuli-14", studentPhone: "9860775502" },
  { name: "Krishna Narayan Shrestha", class: "8'A'", address: "Devchuli-14", studentPhone: "9845197435" },
  { name: "Manisha Rana Magar", class: "8'A'", address: "Devchuli-14", studentPhone: "9815401856" },
  { name: "Mission Ale", class: "8'A'", address: "Devchuli-12", studentPhone: "9811358324" },
  { name: "Nagma Thapa", class: "8'A'", address: "Devchuli-14", studentPhone: "9815146017" },
  { name: "Paras Sigdel", class: "8'A'", address: "Devchuli-13", studentPhone: "9817499708" },
  { name: "Rohit Shrestha", class: "8'A'", address: "Devchuli-14", studentPhone: "9806988094" },
  { name: "Rosni Sigdel", class: "8'A'", address: "Devchuli-13", studentPhone: "9817499708" },
  { name: "Samir Soti Magar", class: "8'A'", address: "Devchuli-1", studentPhone: "9821004372" },
  { name: "Samjana Thapa", class: "8'A'", address: "Devchuli-11", studentPhone: "9821441017" },
  { name: "Santosh Gharti Magar", class: "8'A'", address: "Devchuli-13", studentPhone: "9821908273" },
  { name: "Shilisa Gaha Magar", class: "8'A'", address: "Devchuli-13", studentPhone: "9867492906" },
  { name: "Sonisha Pariyar", class: "8'A'", address: "Devchuli-14", studentPhone: "9867522002" },
  { name: "Srijana Saru", class: "8'A'", address: "Devchuli-11", studentPhone: "9866472494" },
  { name: "Sagarika Dhakal", class: "8'A'", address: "Devchuli-11", studentPhone: "9819436190" },
  { name: "Susmita Gurung", class: "8'A'", address: "Devchuli-11", studentPhone: "9860299147" },
  { name: "Tara Parsad Wantaki", class: "8'A'", address: "Devchuli-14", studentPhone: "9768857595" },
  { name: "Tek Bahadur Magar", class: "8'A'", address: "Devchuli-14", studentPhone: "9825493546" },
  { name: "Yanisha Bk", class: "8'A'", address: "Devchuli-13", studentPhone: "9867568764" },

  //class 7B
  { name: "Aashika Gurung", class: "7’B’", address: "Devchuli-", studentPhone: "" },
  { name: "Anil B.K.", class: "7’B’", address: "Devchuli-", studentPhone: "9811545787" },
  { name: "Anjal Magar", class: "7’B’", address: "Devchuli-", studentPhone: "078575011" },
  { name: "Bipin Gurung", class: "7’B’", address: "Devchuli-", studentPhone: "9864406592" },
  { name: "Debika Tamang", class: "7’B’", address: "Devchuli-", studentPhone: "9764356088" },
  { name: "Dipesh Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9805405953" },
  { name: "Drishti Saru Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9804471829" },
  { name: "Karuna Pulami Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9845409030" },
  { name: "Laxmi Sunar", class: "7’B’", address: "Devchuli-", studentPhone: "9821577337" },
  { name: "Mandip Chitaure", class: "7’B’", address: "Devchuli-", studentPhone: "9804408140" },
  { name: "Mira Praja", class: "7’B’", address: "Devchuli-", studentPhone: "9847059417" },
  { name: "Motisara Ale Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9815474945" },
  { name: "Nabin Sunar", class: "7’B’", address: "Devchuli-", studentPhone: "" },
  { name: "Om B.K.", class: "7’B’", address: "Devchuli-", studentPhone: "9843704270" },
  { name: "Prijina Mugmi", class: "7’B’", address: "Devchuli-", studentPhone: "9826442118" },
  { name: "Prisma Ale Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9821004161" },
  { name: "Pujaniya Ale Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9816284410" },
  { name: "Richa Pariyar", class: "7’B’", address: "Devchuli-", studentPhone: "" },
  { name: "Romi B.K.", class: "7’B’", address: "Devchuli-", studentPhone: "9806150829" },
  { name: "Sabina Saru Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9811931965" },
  { name: "Sachina Bishwokarma", class: "7’B’", address: "Devchuli-", studentPhone: "9826414702" },
  { name: "Sanjila Chitaure Magar", class: "7’B’", address: "Devchuli-", studentPhone: "078575011" },
  { name: "Sapana Thapa", class: "7’B’", address: "Devchuli-", studentPhone: "9806511344" },
  { name: "Shishir Thapa Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9821992664" },



  //class 2
  { "name": "Aaditya Khanal", "class": "2", "address": "Devchuli-14", "studentPhone": "9867859757" },
  { "name": "Aashma Rana", "class": "2", "address": "Devchuli-11", "studentPhone": "9815400289" },
  { "name": "Aayanshu Sigdel", "class": "2", "address": "Devchuli-10", "studentPhone": "9815286135" },
  { "name": "Ajaya Ale Magar", "class": "2", "address": "Devchuli-14", "studentPhone": "9827481655" },
  { "name": "Alisha Thapa", "class": "2", "address": "Devchuli-14", "studentPhone": "9813386132" },
  { "name": "Amrit Bhusal", "class": "2", "address": "Devchuli-11", "studentPhone": "9847144383" },
  { "name": "Amrit Tharu", "class": "2", "address": "Devchuli-13", "studentPhone": "9813148843" },
  { "name": "Anjila Chitaure Magar", "class": "2", "address": "Devchuli-14", "studentPhone": "9827574701" },
  { "name": "Anjila Disuwa", "class": "2", "address": "Devchuli-11", "studentPhone": "9821059836" },
  { "name": "Asika Lungeli", "class": "2", "address": "Devchuli-14", "studentPhone": "9743690390" },
  { "name": "Asim Rana", "class": "2", "address": "Devchuli-11", "studentPhone": "9814022529" },
  { "name": "Asmita Rana", "class": "2", "address": "Devchuli-12", "studentPhone": "9864452875" },
  { "name": "Barish Pandey", "class": "2", "address": "Devchuli-11", "studentPhone": "9704209800" },
  { "name": "Bipinsha Chepanag", "class": "2", "address": "Devchuli-11", "studentPhone": "9700678287" },
  { "name": "Biraj Mahato", "class": "2", "address": "Devchuli-13", "studentPhone": "982546374" },
  { "name": "Biswash Tamang", "class": "2", "address": "Devchuli-13", "studentPhone": "9826434321" },
  { "name": "Dipsan Rana", "class": "2", "address": "Devchuli-11", "studentPhone": "9821004714" },
  { "name": "Diwan Saru", "class": "2", "address": "Devchuli-11", "studentPhone": "9766633360" },
  { "name": "Diwani Dumre", "class": "2", "address": "Devchuli-11", "studentPhone": "9846225550" },
  { "name": "Jenisara Rana", "class": "2", "address": "Devchuli-13", "studentPhone": "9864452875" },
  { "name": "Khuman Sunari", "class": "2", "address": "Devchuli-14", "studentPhone": "9764356115" },
  { "name": "Laxmi Pulami", "class": "2", "address": "Devchuli-11", "studentPhone": "9847495137" },
  { "name": "Nikesh Pandit", "class": "2", "address": "Devchuli-13", "studentPhone": "97134147344" },
  { "name": "Prinsika Disha Magar", "class": "2", "address": "Devchuli-11", "studentPhone": "9819412921" },
  { "name": "Puspa Pandit", "class": "2", "address": "Devchuli-13", "studentPhone": "9713414734" },
  { "name": "Puspa Kamal Aacharya", "class": "2", "address": "Devchuli-", "studentPhone": "" },
  { "name": "Rabishma Achhama", "class": "2", "address": "Devchuli-13", "studentPhone": "9769318366" },
  { "name": "Renuka Makim", "class": "2", "address": "Devchuli-14", "studentPhone": "98064667865" },
  { "name": "Ridisha Bk", "class": "2", "address": "Devchuli-13", "studentPhone": "9826416931" },
  { "name": "Satya Thakur", "class": "2", "address": "Devchuli-13", "studentPhone": "9807526346" },
  { "name": "Srijan Bakawal", "class": "2", "address": "Devchuli-11", "studentPhone": "9842369881" },
  { "name": "Sushant Tharu", "class": "2", "address": "Devchuli-13", "studentPhone": "9804177656" },
  { "name": "Sujina Rana (N)", "class": "2", "address": "Devchuli-11", "studentPhone": "" },
  { "name": "Aayush Kharu (N)", "class": "2", "address": "Devchuli-14", "studentPhone": "9811556213" },
  
  
  //Class 7A
    { "name": "Aashish Pulami", "class": "7A", "address": "Devchuli-3", "studentPhone": "9804404452" },
    { "name": "Anish Tamang", "class": "7A", "address": "Devchuli-13", "studentPhone": "9743418704" },
    { "name": "Ashok Sinjali Magar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9707909311" },
    { "name": "Barsha Thapa Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9863579631" },
    { "name": "Bipana Pariyar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9826429751" },
    { "name": "Dewa Rakim Magar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9807432232" },
    { "name": "Dipika Pulami", "class": "7A", "address": "Devchuli-11", "studentPhone": "9840959411" },
    { "name": "Gayatri Sapkota", "class": "7A", "address": "Devchuli-12", "studentPhone": "9867111176" },
    { "name": "Koshish Bahadur Chettri", "class": "7A", "address": "Devchuli-11", "studentPhone": "9877009890" },
    { "name": "Manu Mahato Nuniya", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821059228" },
    { "name": "Mebika Gurung", "class": "7A", "address": "Devchuli-11", "studentPhone": "9819406000" },
    { "name": "Milisk Pata", "class": "7A", "address": "Devchuli-11", "studentPhone": "9824433993" },
    { "name": "Pappu Mahato Nuniya", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821059228" },
    { "name": "Puja Kumal", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821430738" },
    { "name": "Pushpa Sarki", "class": "7A", "address": "Devchuli-11", "studentPhone": "970428738" },
    { "name": "Rejin Thapa", "class": "7A", "address": "Devchuli-11", "studentPhone": "9816424210" },
    { "name": "Roshan Thapa Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9827417780" },
    { "name": "Shashi Rijal", "class": "7A", "address": "Devchuli-11", "studentPhone": "9700680109" },
    { "name": "Sita Saru Magar", "class": "7A", "address": "Devchuli-13", "studentPhone": "9767006471" },
    { "name": "Sonam Saru Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9808570693" },
    { "name": "Sonisha Bache Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9814483999" },
    { "name": "Srijan Rana", "class": "7A", "address": "Devchuli-13", "studentPhone": "9706597158" },
    { "name": "Sweta Gahatraj", "class": "7A", "address": "Devchuli-14", "studentPhone": "9767629365" },
    { "name": "Tikaram Sapkota", "class": "7A", "address": "Devchuli-13", "studentPhone": "9867836951" },
  

    //class 3
    { "name": "Aachal Thapa (N)", "class": "3", "address": "Devchuli-", "studentPhone": "" },
    { "name": "Aayush Thapa Magar", "class": "3", "address": "Devchuli-", "studentPhone": "9825456354" },
    { "name": "Asmita Nepali", "class": "3", "address": "Devchuli-", "studentPhone": "9812902169" },
    { "name": "Barsa Pulami", "class": "3", "address": "Devchuli-", "studentPhone": "9707332281" },
    { "name": "Dibyan Bhusal", "class": "3", "address": "Devchuli-", "studentPhone": "9867130155" },
    { "name": "Dipesh Saru Magar", "class": "3", "address": "Devchuli-", "studentPhone": "9766633360" },
    { "name": "Dipin Pariyar (N)", "class": "3", "address": "Devchuli-", "studentPhone": "9826107083" },
    { "name": "Dipsan Aale", "class": "3", "address": "Devchuli-", "studentPhone": "9713940525" },
    { "name": "Diya Saru", "class": "3", "address": "Devchuli-", "studentPhone": "9806398426" },
    { "name": "Icchya Pariyar (N)", "class": "3", "address": "Devchuli-", "studentPhone": "9812966505" },
    { "name": "Imron Rana", "class": "3", "address": "Devchuli-", "studentPhone": "9810676624" },
    { "name": "Kristi Disha Magar", "class": "3", "address": "Devchuli-", "studentPhone": "9828920838" },
    { "name": "Manisha Nepali", "class": "3", "address": "Devchuli-", "studentPhone": "9811956055" },
    { "name": "Niharika Gaha Magar", "class": "3", "address": "Devchuli-", "studentPhone": "9823973066" },
    { "name": "Priska Lungeli", "class": "3", "address": "Devchuli-", "studentPhone": "9815481781" },
    { "name": "Renuka Rana", "class": "3", "address": "Devchuli-", "studentPhone": "9768346749" },
    { "name": "Rojina Saru", "class": "3", "address": "Devchuli-", "studentPhone": "9818999880" },
    { "name": "Rubin Nepali", "class": "3", "address": "Devchuli-", "studentPhone": "9811956055" },
    { "name": "Sabina Tamang", "class": "3", "address": "Devchuli-", "studentPhone": "9825460897" },
    { "name": "Sajan Thakuri", "class": "3", "address": "Devchuli-", "studentPhone": "9807526347" },
    { "name": "Samar Pariyar", "class": "3", "address": "Devchuli-", "studentPhone": "9867522902" },
    { "name": "Samar Thapa", "class": "3", "address": "Devchuli-", "studentPhone": "9743442343" },
    { "name": "Samiksha Disha Magar", "class": "3", "address": "Devchuli-", "studentPhone": "9819468496" },
    { "name": "Samir Magar", "class": "3", "address": "Devchuli-", "studentPhone": "9864471481" },
    { "name": "Samir Mansuri", "class": "3", "address": "Devchuli-", "studentPhone": "9706760964" },
    { "name": "Samjana Rana", "class": "3", "address": "Devchuli-", "studentPhone": "9814022529" },
    { "name": "Shirshir Shresstha", "class": "3", "address": "Devchuli-", "studentPhone": "9847024410" },
    { "name": "Shiva Thapa", "class": "3", "address": "Devchuli-", "studentPhone": "9867296479" },
    { "name": "Suhana Gaha", "class": "3", "address": "Devchuli-", "studentPhone": "9823973066" },
    { "name": "Suhana Pariyar (N)", "class": "3", "address": "Devchuli-", "studentPhone": "9818308134" },
    { "name": "Suraj Thada Magar", "class": "3", "address": "Devchuli-", "studentPhone": "9764652724" },
    { "name": "Swostika Saru", "class": "3", "address": "Devchuli-", "studentPhone": "9705604547" },
    { "name": "Kayak Alam", "class": "3", "address": "Devchuli-13", "studentPhone": "9815433918" },
    
// class 4
    
    { "name": "Aarush Shrestha", "class": "4", "address": "Devchuli-11", "studentPhone": "9707447707" },
    { "name": "Aayoush Sigdel", "class": "4", "address": "Devchuli-11", "studentPhone": "9875286735" },
    { "name": "Amrita Bache", "class": "4", "address": "Devchuli-11", "studentPhone": "9766259349" },
    { "name": "Anjana Bayembu", "class": "4", "address": "Devchuli-11", "studentPhone": "9844787584" },
    { "name": "Bimal Kumal", "class": "4", "address": "Devchuli-14", "studentPhone": "9713940415" },
    { "name": "Bimal Tamang", "class": "4", "address": "Devchuli-13", "studentPhone": "9826434321" },
    { "name": "Bipin Birkatta", "class": "4", "address": "Devchuli-11", "studentPhone": "9749395160" },
    { "name": "Bishesta Shrestha", "class": "4", "address": "Devchuli-14", "studentPhone": "9866620472" },
    { "name": "Dev Sunari", "class": "4", "address": "Devchuli-11", "studentPhone": "9709487695" },
    { "name": "Dipak Kumar", "class": "4", "address": "Devchuli-", "studentPhone": "" },
    { "name": "Dipesh Phyali", "class": "4", "address": "Devchuli-12", "studentPhone": "9744545745" },
    { "name": "Enjila Khanadaluk", "class": "4", "address": "Devchuli-14", "studentPhone": "9824436081" },
    { "name": "Ganesh Aadhikari", "class": "4", "address": "Devchuli-11", "studentPhone": "9713895827" },
    { "name": "Jeny Gurung", "class": "4", "address": "Devchuli-11", "studentPhone": "9765634938" },
    { "name": "Kasmira Nepali", "class": "4", "address": "Devchuli-14", "studentPhone": "9842910513" },
    { "name": "Khusbu Sunari", "class": "4", "address": "Devchuli-14", "studentPhone": "9764652235" },
    { "name": "Koplia Sarki (N)", "class": "4", "address": "Devchuli-11", "studentPhone": "9743658485" },
    { "name": "Manish Pariyar (N)", "class": "4", "address": "Devchuli-14", "studentPhone": "9818308134" },
    { "name": "Pratap Ghahatraj", "class": "4", "address": "Devchuli-14", "studentPhone": "9827481583" },
    { "name": "Prince Tamang (N)", "class": "4", "address": "Devchuli-11", "studentPhone": "9812906716" },
    { "name": "Pujan Kumal", "class": "4", "address": "Devchuli-13", "studentPhone": "9821430738" },
    { "name": "Rajan Sarki", "class": "4", "address": "Devchuli-11", "studentPhone": "9706760934" },
    { "name": "Ritika Kumal", "class": "4", "address": "Devchuli-14", "studentPhone": "9823973157" },
    { "name": "Rohit Makim", "class": "4", "address": "Devchuli-11", "studentPhone": "9826681767" },
    { "name": "Sabita Nepali", "class": "4", "address": "Devchuli-14", "studentPhone": "9827175103" },
    { "name": "Sakshi Thakuri", "class": "4", "address": "Devchuli-13", "studentPhone": "9807526347" },
    { "name": "Samikshya Priyar", "class": "4", "address": "Devchuli-14", "studentPhone": "9826471568" },
    { "name": "Shirish Saru (N)", "class": "4", "address": "Devchuli-14", "studentPhone": "9747234472" },
    { "name": "Subashna Tamang", "class": "4", "address": "Devchuli-11", "studentPhone": "9764356088" },
    { "name": "Sunil Nepali", "class": "4", "address": "Devchuli-11", "studentPhone": "9811956055" },
    { "name": "Urmila Sharki", "class": "4", "address": "Devchuli-11", "studentPhone": "9704208738" },
    // class10A


    
  
    { "name": "Alisa Rana", "class": "10A", "address": "Devchuli-14", "studentPhone": "9768353302" },
    { "name": "Anisha Ale", "class": "10A", "address": "Devchuli-14", "studentPhone": "9816118974" },
    { "name": "Asmit Sunar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9825488943" },
    { "name": "Buddhi Thapa Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9806607951" },
    { "name": "Chiran Kanhu Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9812911154" },
    { "name": "Gaurab Ghimire", "class": "10A", "address": "Devchuli-10", "studentPhone": "9845081651" },
    { "name": "Gir Prasad Maski", "class": "10A", "address": "Devchuli-14", "studentPhone": "9829544995" },
    { "name": "Hom Prakash Thapa", "class": "10A", "address": "Devchuli-12", "studentPhone": "9800744903" },
    { "name": "Karuna Darlami Magar", "class": "10A", "address": "Devchuli-11", "studentPhone": "9819442451" },
    { "name": "Laxuman Makim", "class": "10A", "address": "Devchuli-14", "studentPhone": "9842598330" },
    { "name": "Manisha Thapa", "class": "10A", "address": "Devchuli-14", "studentPhone": "9817152115" },
    { "name": "Manoj Chitaure Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9804408140" },
    { "name": "Nishchal Saru Magar", "class": "10A", "address": "Devchuli-12", "studentPhone": "9817562099" },
    { "name": "Parbati Thada", "class": "10A", "address": "Devchuli-14", "studentPhone": "9708918972" },
    { "name": "Pratikshya Sapkota", "class": "10A", "address": "Devchuli-12", "studentPhone": "9867111176" },
    { "name": "Rim Kumar Lungeli Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9824426649" },
    { "name": "Sabina Rana Magar", "class": "10A", "address": "Devchuli-11", "studentPhone": "9816440243" },
    { "name": "Saikshya B.K", "class": "10A", "address": "Devchuli-14", "studentPhone": "9816416702" },
    { "name": "Sandhya Sapkota", "class": "10A", "address": "Devchuli-12", "studentPhone": "9867836951" },
    { "name": "Sandip Tamang", "class": "10A", "address": "Devchuli-12", "studentPhone": "98295826" },
    { "name": "Sangita Lungeli Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9814413112" },
    { "name": "Sonam Soti Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9811451500" },
    { "name": "Soniya Nepali", "class": "10A", "address": "Devchuli-14", "studentPhone": "9827661771" },
    { "name": "Tali Maya Rana Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9869291649" },
    { "name": "Teju Birkatta Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9806933065" },
    { "name": "Tishna Thapa Magar", "class": "10A", "address": "Devchuli-14", "studentPhone": "9811556213" },
    { "name": "Upendra Ale Magar", "class": "10A", "address": "Devchuli-11", "studentPhone": "9840968124" },

    //class 10B
  
    { "name": "Bhumika Shrestha", "class": "10B", "address": "Devchuli-14", "studentPhone": "976284364" },
    { "name": "Binita Chidi", "class": "10B", "address": "Devchuli-14", "studentPhone": "9812996526" },
    { "name": "Dinanath Prasad Shah Kanhu", "class": "10B", "address": "Devchuli-13", "studentPhone": "9767603726" },
    { "name": "Dipendra Rakim Magar", "class": "10B", "address": "Devchuli-1", "studentPhone": "9768375935" },
    { "name": "Gam Maya Susling Magar", "class": "10B", "address": "Devchuli-14", "studentPhone": "9804411952" },
    { "name": "Jasmin Sunari", "class": "10B", "address": "Devchuli-13", "studentPhone": "9869674300" },
    { "name": "Laxmi Bk", "class": "10B", "address": "Devchuli-3", "studentPhone": "9826614113" },
    { "name": "Min Maya Thada Magar", "class": "10B", "address": "Devchuli-14", "studentPhone": "9804411952" },
    { "name": "Min Bahadur Makim", "class": "10B", "address": "Devchuli-11", "studentPhone": "9816459046" },
    { "name": "Pabi Maya Sarki", "class": "10B", "address": "Devchuli-13", "studentPhone": "9809357085" },
    { "name": "Ramesh Lungeli Thapa", "class": "10B", "address": "Devchuli-14", "studentPhone": "9800779609" },
    { "name": "Rasmi Pulami Magar", "class": "10B", "address": "Devchuli-3", "studentPhone": "9804404452" },
    { "name": "Rom Maya Thada Magar", "class": "10B", "address": "Devchuli-14", "studentPhone": "986790692" },
    { "name": "Roshan Saru Magar", "class": "10B", "address": "Devchuli-14", "studentPhone": "9820278495" },
    { "name": "Samir Rana Magar", "class": "10B", "address": "Devchuli-14", "studentPhone": "9815401856" },
    { "name": "Shusil B.K", "class": "10B", "address": "Devchuli-15", "studentPhone": "9811545787" },
    { "name": "Sirjana B.K", "class": "10B", "address": "Devchuli-10", "studentPhone": "9700562910" },
    { "name": "Subash Mahato", "class": "10B", "address": "Devchuli-", "studentPhone": "9767005458" },
    { "name": "Tas Bahadur Gaha Magar", "class": "10B", "address": "Devchuli-14", "studentPhone": "9869949989" },
    { "name": "Til Raj Nepali", "class": "10B", "address": "Devchuli-13", "studentPhone": "9821442893" },
    { "name": "Urmila Saru", "class": "10B", "address": "Devchuli-12", "studentPhone": "9811864309" },
    { "name": "Yogendra Lungeli", "class": "10B", "address": "Devchuli-", "studentPhone": "9864471236" },
    { "name": "Salina Pariyar", "class": "10B", "address": "Devchuli-11", "studentPhone": "9826101083" },

   // class7A
    
  
    { "name": "Aashish Pulami", "class": "7A", "address": "Devchuli-3", "studentPhone": "9804404452" },
    { "name": "Anish Tamang", "class": "7A", "address": "Devchuli-13", "studentPhone": "9743418704" },
    { "name": "Ashok Sinjali Magar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9707909311" },
    { "name": "Barsha Thapa Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9413388613" },
    { "name": "Bipana Pariyar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9826429775" },
    { "name": "Dewa Rakim Magar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9807432232" },
    { "name": "Dipika Pulami", "class": "7A", "address": "Devchuli-11", "studentPhone": "9840959411" },
    { "name": "Gayatri Sapkota", "class": "7A", "address": "Devchuli-12", "studentPhone": "9867111176" },
    { "name": "Koshish Bahadur Chettri", "class": "7A", "address": "Devchuli-11", "studentPhone": "9877009890" },
    { "name": "Manu Mahato Nuniya", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821059228" },
    { "name": "Mebika Gurung", "class": "7A", "address": "Devchuli-11", "studentPhone": "9804469567" },
    { "name": "Milisk Pata", "class": "7A", "address": "Devchuli-11", "studentPhone": "9824433993" },
    { "name": "Pappu Mahato Nuniya", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821059228" },
    { "name": "Puja Kumal", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821430738" },
    { "name": "Pushpa Sarki", "class": "7A", "address": "Devchuli-11", "studentPhone": "9704287385" },
    { "name": "Rejin Thapa", "class": "7A", "address": "Devchuli-11", "studentPhone": "9816424210" },
    { "name": "Roshan Thapa Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9827417780" },
    { "name": "Shashi Rijal", "class": "7A", "address": "Devchuli-11", "studentPhone": "9700680109" },
    { "name": "Sita Saru Magar", "class": "7A", "address": "Devchuli-13", "studentPhone": "9767006471" },
    { "name": "Sonam Saru Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9808570693" },
    { "name": "Sonisha Bache Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9726959349" },
    { "name": "Srijan Rana", "class": "7A", "address": "Devchuli-13", "studentPhone": "9706597158" },
    { "name": "Sweta Gahatraj", "class": "7A", "address": "Devchuli-14", "studentPhone": "9767629365" },
    { "name": "Tikaram Sapkota", "class": "7A", "address": "Devchuli-13", "studentPhone": "9867836951" },


    //Nur

    { name: "AARATI B.K", class: "KG", address: "Devchuli-14", studentPhone: "9826414702" },
  { name: "AARYAN KUSUWA", class: "KG", address: "Devchuli-13", studentPhone: "9815299716" },
  { name: "AARYAN NEPALI", class: "KG", address: "Devchuli-14", studentPhone: "9705761866" },
  { name: "BUDDHA NEPALI", class: "KG", address: "Devchuli-11", studentPhone: "9811956055" },
  { name: "DEVI KUMAL", class: "KG", address: "Devchuli-13", studentPhone: "9821440979" },
  { name: "DIPSA SINJALI", class: "KG", address: "Devchuli-14", studentPhone: "9805430307" },
  { name: "JOSHEPH KUMAL", class: "KG", address: "Devchuli-13", studentPhone: "9702962739" },
  { name: "LALITA SUNARI", class: "KG", address: "Devchuli-14", studentPhone: "9764652135" },
  { name: "MASHUM SHEKHA", class: "KG", address: "Devchuli-13", studentPhone: "9709769092" },
  { name: "PRAJJAL POKHEREL", class: "KG", address: "", studentPhone: "Left" },
  { name: "PRISA LUNGELI", class: "KG", address: "Devchuli-14", studentPhone: "9743690390" },
  { name: "RISPA SUNARI", class: "KG", address: "Devchuli-14", studentPhone: "9849102994" },
  { name: "SAMYOG B.K.", class: "KG", address: "Devchuli-14", studentPhone: "9764537090" },
  { name: "SHANKHAR THAPA", class: "KG", address: "Devchuli-14", studentPhone: "9867296479" },
  { name: "SUJAL TAMANG", class: "KG", address: "Devchuli-11", studentPhone: "9807280763" },
  { name: "SUJIT PARIYAR", class: "KG", address: "Devchuli-14", studentPhone: "9829123548 / 9821489745" },
  { name: "SUMINA RISIME", class: "KG", address: "Devchuli-14", studentPhone: "9714012490" },
  { name: "SUNIL KHANU", class: "KG", address: "Devchuli-14", studentPhone: "9745437050" },
  { name: "TORAN ALE", class: "KG", address: "Devchuli-12", studentPhone: "9811833524" },
  { name: "YUNISHA GAHA", class: "KG", address: "Devchuli-11", studentPhone: "9706645495" },
  { name: "YUSAN RANA", class: "KG", address: "Devchuli-14", studentPhone: "9703326744" },
  { name: "SUPRIM RANA", class: "KG", address: "", studentPhone: "" },
  { name: "SUSHANT RANA", class: "KG", address: "", studentPhone: "" },
  { name: "YOJAN B.K.", class: "KG", address: "", studentPhone: "" },

  //9B
  { name: "AAYUSH ALE", class: "9’B’", address: "Devchuli-11", studentPhone: "9848776696" },
  { name: "BISHAN SARU MAGAR", class: "9’B’", address: "Devchuli-14", studentPhone: "9820278495" },
  { name: "DIPSHIKHA THAPA MAGAR", class: "9’B’", address: "Devchuli-14", studentPhone: "9857041843" },
  { name: "JYAM MAYA GAHA MAGAR", class: "9’B’", address: "Devchuli-14", studentPhone: "9706972933" },
  { name: "MERINA KHAN THAKURI", class: "9’B’", address: "Devchuli-14", studentPhone: "9702962209" },
  { name: "PREETI BIRKATTA MAGAR", class: "9’B’", address: "Devchuli-14", studentPhone: "9867378316" },
  { name: "PUSPA SARU MAGAR", class: "9’B’", address: "Devchuli-13", studentPhone: "9748437212" },
  { name: "SACHINA NEPALI", class: "9’B’", address: "Devchuli-11", studentPhone: "9824425675" },
  { name: "SANJOK NEPALI", class: "9’B’", address: "Devchuli-14", studentPhone: "9827661771" },
  { name: "SUJATA RANA MAGAR", class: "9’B’", address: "Devchuli-14", studentPhone: "9804475616" },

  //6
  { name: "AAKASH ASLAMI", class: "6", address: "Devchuli-14", studentPhone: "9747234412" },
  { name: "AAMOSH PATA MAGAR", class: "6", address: "Devchuli-14", studentPhone: "9744304299" },
  { name: "AASHA GHAHA", class: "6", address: "Devchuli-9", studentPhone: "" },
  { name: "AAYUSHMA ALE", class: "6", address: "Devchuli-1", studentPhone: "" },
  { name: "AJAYA THAPA", class: "6", address: "Devchuli-14", studentPhone: "" },
  { name: "AJINA THADA", class: "6", address: "Devchuli-14", studentPhone: "9815493576" },
  { name: "ANMOL PHAL MAGAR", class: "6", address: "Devchuli-14", studentPhone: "9761573609" },
  { name: "ANUSKA RANA MAGAR", class: "6", address: "Devchuli-11", studentPhone: "9765397890" },
  { name: "ASIM THADA", class: "6", address: "Devchuli-11", studentPhone: "" },
  { name: "ASMI ASLAMI", class: "6", address: "Devchuli-14", studentPhone: "9747234412" },
  { name: "BANDANA NEPALI", class: "6", address: "Devchuli-11", studentPhone: "9825482983" },
  { name: "BIKRAM SARKI", class: "6", address: "Devchuli-11", studentPhone: "9806751777" },
  { name: "BIMALA KUMAL", class: "6", address: "Devchuli-14", studentPhone: "9713940415" },
  { name: "BIPEN THAPA", class: "6", address: "Devchuli-14", studentPhone: "9848702369" },
  { name: "CHANDRA PATA", class: "6", address: "Devchuli-11", studentPhone: "9840955411" },
  { name: "CHHAWANI ALI", class: "6", address: "Devchuli-14", studentPhone: "97615469736" },
  { name: "CHIRAN BAKBAL MAGAR", class: "6", address: "Devchuli-14", studentPhone: "9748438345" },
  { name: "DIPSAN DUMRE", class: "6", address: "Devchuli-11", studentPhone: "9846225550" },
  { name: "DIYA KHANAL", class: "6", address: "Devchuli-14", studentPhone: "9867856757" },
  { name: "GUNJAN RESMI", class: "6", address: "Devchuli-14", studentPhone: "9708046516" },
  { name: "HIRA SINGH DISHA MAGAR", class: "6", address: "Devchuli-11", studentPhone: "9828920838" },
  { name: "JEMS GAHIA", class: "6", address: "Devchuli-13", studentPhone: "9708397541" },
  { name: "JIT BDR SARKI", class: "6", address: "Devchuli-11", studentPhone: "9870676094" },
  { name: "KHUSHI MAHATO", class: "6", address: "Devchuli-13", studentPhone: "9800730235" },
  { name: "KHUSHI PULAMI MAGAR", class: "6", address: "Devchuli-14", studentPhone: "9844313239" },
  { name: "MAHAN TAMANG", class: "6", address: "Devchuli-12", studentPhone: "9869201858 / 9744545738" },
  { name: "MANJITA THAPA", class: "6", address: "Devchuli-11", studentPhone: "9869201858" },
  { name: "NAWARAJ ALE MAGAR", class: "6", address: "Devchuli-14", studentPhone: "9815474945" },
  { name: "PHILIP WANTAKI", class: "6", address: "Devchuli-14", studentPhone: "" },
  { name: "PRATIGYA SARU", class: "6", address: "Devchuli-12", studentPhone: "9807575787" },
  { name: "PRINCE ALE", class: "6", address: "Devchuli-13", studentPhone: "" },
  { name: "PRIYA RAKIM", class: "6", address: "Devchuli-11", studentPhone: "9807432232" },
  { name: "RABINA GARANJA", class: "6", address: "Devchuli-14", studentPhone: "9826585318" },
  { name: "RASHMI PULAMI", class: "6", address: "Devchuli-11", studentPhone: "9840488358" },
  { name: "RIDAM MAKIM", class: "6", address: "Devchuli-14", studentPhone: "9826585318" },
  { name: "ROSHAN SUNARI", class: "6", address: "Devchuli-14", studentPhone: "9764356115" },
  { name: "RUP NARAYAN KHANAL", class: "6", address: "Devchuli-14", studentPhone: "9706365503" },
  { name: "SAKSHYAM GURUNG", class: "6", address: "Devchuli-14", studentPhone: "9847199004" },
  { name: "SAMIKSHYA BAINIA", class: "6", address: "Devchuli-11", studentPhone: "9804481301" },
  { name: "SANDHYA PARIYAR", class: "6", address: "Devchuli-14", studentPhone: "9825416612" },
  { name: "SANISH TAMANG", class: "6", address: "Devchuli-13", studentPhone: "9824457164 / 9742333606" },
  { name: "SONIYA GAHA MAGAR", class: "6", address: "Devchuli-14", studentPhone: "9824457761" },
  { name: "SRIJANA BAKWAL", class: "6", address: "Devchuli-11", studentPhone: "" },
  { name: "SUSAN THAPA", class: "6", address: "Devchuli-11", studentPhone: "9821441017" },
  { name: "TARA MAYA MAYA RANA MAGAR", class: "6", address: "Devchuli-11", studentPhone: "9768346749" },
  { name: "YUJAN GAHA", class: "6", address: "Devchuli-14", studentPhone: "9764337991" },
  //8A
  { name: "Anshu Rai", class: "8’A’", address: "Devchuli-13", studentPhone: "9843410043" },
  { name: "Asbina Rana Magar", class: "8’A’", address: "Devchuli-11", studentPhone: "9765397890" },
  { name: "Asim Birta Magar", class: "8’A’", address: "Devchuli-11", studentPhone: "9843203802" },
  { name: "Bibisa Ghimire", class: "8’A’", address: "Devchuli-13", studentPhone: "9867693541" },
  { name: "Bishal Sunar", class: "8’A’", address: "Devchuli-14", studentPhone: "9812962581" },
  { name: "Bishnu Sing Kunwar", class: "8’A’", address: "Devchuli-14", studentPhone: "9827563612" },
  { name: "Himal Gurung", class: "8’A’", address: "Devchuli-14", studentPhone: "9716057419" },
  { name: "Icchya Baruwal", class: "8’A’", address: "Devchuli-14", studentPhone: "9820277613" },
  { name: "Icchya Bayambu Magar", class: "8’A’", address: "Devchuli-11", studentPhone: "9844787584" },
  { name: "Jyoti Nepali", class: "8’A’", address: "Devchuli-11", studentPhone: "9825482983" },
  { name: "Khum Maya Gaha Magar", class: "8’A’", address: "Devchuli-14", studentPhone: "9811474867" },
  { name: "Kismat Tamang", class: "8’A’", address: "Devchuli-14", studentPhone: "9866379996" },
  { name: "Kripa Thapa", class: "8’A’", address: "Devchuli-14", studentPhone: "9860775502" },
  { name: "Krishna Narayan Shrestha", class: "8’A’", address: "Devchuli-14", studentPhone: "9845197435" },
  { name: "Manisha Rana Magar", class: "8’A’", address: "Devchuli-14", studentPhone: "9815401856" },
  { name: "Mission Ale", class: "8’A’", address: "Devchuli-12", studentPhone: "9811358324" },
  { name: "Nagma Thapa", class: "8’A’", address: "Devchuli-14", studentPhone: "9815146017" },
  { name: "Paras Sigdel", class: "8’A’", address: "Devchuli-13", studentPhone: "9817499708" },
  { name: "Rohit Shrestha", class: "8’A’", address: "Devchuli-14", studentPhone: "9806988094" },
  { name: "Rosni Sigdel", class: "8’A’", address: "Devchuli-13", studentPhone: "9817499708" },
  { name: "Samir Soti Magar", class: "8’A’", address: "Devchuli-1", studentPhone: "9821004372" },
  { name: "Samjana Thapa", class: "8’A’", address: "Devchuli-11", studentPhone: "9821441017" },
  { name: "Santosh Gharti Magar", class: "8’A’", address: "Devchuli-13", studentPhone: "9821908273" },
  { name: "Shilisa Gaha Magar", class: "8’A’", address: "Devchuli-13", studentPhone: "9867492906" },
  { name: "Sonisha Pariyar", class: "8’A’", address: "Devchuli-14", studentPhone: "9867522902" },
  { name: "Srijana Saru", class: "8’A’", address: "Devchuli-11", studentPhone: "9866472494" },
  { name: "Sugarika Dhakal", class: "8’A’", address: "Devchuli-11", studentPhone: "9819436190" },
  { name: "Susmita Gurung", class: "8’A’", address: "Devchuli-11", studentPhone: "9860299147" },
  { name: "Tara Parsad Wantaki", class: "8’A’", address: "Devchuli-14", studentPhone: "9768857596" },
  { name: "Tek Bahadur Magar", class: "8’A’", address: "Devchuli-14", studentPhone: "9825493546" },
  { name: "Yunisha Bk", class: "8’A’", address: "Devchuli-13", studentPhone: "9867568764" }

];


const teachers = [
  {
    name: "Dinesh Rana",
    subject: "Subject Teacher",
    phone: "9814462637",
    password: "9814462637",
    role: "admin"
  },
  {
    name: "Shreedhar Gyawali",
    subject: "Principal",
    phone: "9847079070",
    password: "9847079070",
    role: "admin"
  },
  {
    name: "Paras Poudel (Class Teacher-9B)",
    subject: "Vice Principal",
    phone: "9861217060",
    password: "9861217060"
  },
  {
    name: "Durga Datta Ghimire",
    subject: "Class Teacher-10A",
    phone: "9847073279",
    password: "9847073279"
  },
  {
    name: "Chandrakala Pandey",
    subject: "Class Teacher-10B",
    phone: "9867106128",
    password: "9867106128"
  },
  {
    name: "Sita Neupane",
    subject: "Subject Teacher",
    phone: "9866043621",
    password: "9866043621"
  },
  {
    name: "Bishnu P. Gautam",
    subject: "Subject Teacher",
    phone: "9857041168",
    password: "9857041168"
  },
  {
    name: "Kaushalya Banjade",
    subject: "Subject Teacher",
    phone: "9869783164",
    password: "9869783164"
  },
  {
    name: "Soma Baral",
    subject: "Class Teacher-2",
    phone: "9847484902",
    password: "9847484902"
  },
  {
    name: "Kamala Belbase",
    subject: "Subject Teacher",
    phone: "9847122470",
    password: "9847122470"
  },
  {
    name: "Durga Paudel",
    subject: "Subject Teacher",
    phone: "",
    password: ""
  },
  {
    name: "Kabita Ghimire",
    subject: "Class Teacher-6",
    phone: "9844710700",
    password: "9844710700"
  },
  {
    name: "Chhabikala Bhandari",
    subject: "Subject Teacher",
    phone: "9860295724",
    password: "9860295724"
  },
  {
    name: "Sarita J.C.",
    subject: "Class Teacher-7A",
    phone: "9764661478",
    password: "9764661478"
  },
  {
    name: "Bhagirathi Pandey",
    subject: "Class Teacher-4",
    phone: "9848801525",
    password: "9848801525"
  },
  {
    name: "Ghanshyam Bhusal",
    subject: "Class Teacher-7B",
    phone: "9867130155",
    password: "9867130155"
  },
  {
    name: "Jitnarayan Mahato",
    subject: "Class Teacher-8B",
    phone: "",
    password: ""
  },
  {
    name: "Tika Chapagain",
    subject: "Subject Teacher",
    phone: "9842922778",
    password: "9842922778"
  },
  {
    name: "Kiran Kharel",
    subject: "Subject Teacher",
    phone: "",
    password: ""
  },
  {
    name: "Kalpana Bhandari",
    subject: "Class Teacher-3",
    phone: "9847094742",
    password: "9847094742"
  },
  {
    name: "Tiku Gurung",
    subject: "Class Teacher-1",
    phone: "9807411630",
    password: "9807411630"
  },
  {
    name: "Laxmi Bhandari",
    subject: "Class Teacher-9A",
    phone: "9862270746",
    password: "9862270746"
  },
  {
    name: "Om Sunar",
    subject: "Class Teacher-8A",
    phone: "9811933351",
    password: "9811933351"
  },
  {
    name: "Bibas Bhattarai",
    subject: "Class Teacher-5",
    phone: "9862709649",
    password: "9862709649"
  },
  {
    name: "Kiran Shrestha",
    subject: "Class Teacher-UKG",
    password: "9820277598"
  },
  {
    name: "Dhana Sapkota",
    subject: "Class Teacher-NUR",
    phone: "",
    password: ""
  }
];

const staff = [
  { name: "Rita Dumre", title: "Office Staff", phone: "" },
  { name: "Suraj Subedi", title: "Office Staff", phone: "9744456596" },
  { name: "Manu Kuwar", title: "Office Staff", phone: "" }
];


// Allowed users are teachers; derive credentials from the teachers list
const allowedUsers = teachers.map(t => ({ phone: t.phone, password: t.password }));
const allowedUserCount = allowedUsers.length;

const authKey = "grid2081-contact-auth";
const teacherNameKey = "grid2081-contact-teacher-name";
const roleKey = "grid2081-contact-role";
const staffStorageKey = "grid2081-contact-staff-data";
let activeSection = "students";
let searchTerm = "";

const loginView = document.getElementById("loginView");
const dashboardView = document.getElementById("dashboardView");
const loginForm = document.getElementById("loginForm");
const phoneInput = document.getElementById("phoneInput");
const passwordInput = document.getElementById("passwordInput");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");
const searchInput = document.getElementById("searchInput");
const directoryGrid = document.getElementById("directoryGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const sectionTitle = document.getElementById("sectionTitle");
const activeEyebrow = document.getElementById("activeEyebrow");
const toast = document.getElementById("toast");
const classFilter = document.getElementById("classFilter");
const sectionFilter = document.getElementById("sectionFilter");

const teacherGreeting = document.getElementById("teacherGreeting");
const sectionTabs = document.getElementById("sectionTabs");
const searchClearBtn = document.getElementById("searchClearBtn");
const searchHint = document.getElementById("searchHint");
let activeClassFilter = "";
let activeSectionFilter = "";
let currentUserRole = localStorage.getItem(roleKey) || "teacher";

function showLoader() {
  // Loader removed from new design
}

function hideLoader() {
  // Loader removed from new design
}

function isLoggedIn() {
  return localStorage.getItem(authKey) === "true";
}

function showLogin() {
  if (dashboardView && dashboardView.classList) dashboardView.classList.add("hidden");
  if (loginView && loginView.classList) {
    loginView.classList.remove("hidden");
    document.body.style.overflow = "";
  }
}

function showDashboard() {
  if (loginView && loginView.classList) loginView.classList.add("hidden");
  if (dashboardView && dashboardView.classList) {
    dashboardView.classList.remove("hidden");
    dashboardView.classList.toggle("teacher-mode", currentUserRole !== "admin");
    applyRolePermissions();
    updateTeacherGreeting();
    populateClassFilter();
    renderDirectory();
  }
}

function applyRolePermissions() {
  const isAdmin = currentUserRole === "admin";
  if (dashboardView && dashboardView.classList) {
    dashboardView.classList.toggle("teacher-mode", !isAdmin);
  }
  if (sectionTabs) {
    sectionTabs.classList.remove("hidden");
  }
}

function updateTeacherGreeting() {
  if (!teacherGreeting) return;
  const teacherName = localStorage.getItem(teacherNameKey);
  const roleLabel = currentUserRole === "admin" ? "Admin" : "Teacher";
  teacherGreeting.textContent = teacherName ? `Welcome, ${teacherName} (${roleLabel})` : `Welcome, ${roleLabel}`;
}

function setMessage(message, type = "error") {
  loginMessage.textContent = message;
  loginMessage.style.color = type === "success" ? "#16A34A" : "#DC2626";
}

function normalizePhone(phone) {
  return phone.replace(/\D/g, "");
}

function handleLogin(event) {
  event.preventDefault();
  const phone = normalizePhone(phoneInput.value.trim());
  const password = passwordInput.value.trim();

  if (!phone || !password) {
    setMessage("Please enter both phone number and password.");
    return;
  }

  const validTeacher = teachers.find(teacher => teacher.phone === phone && teacher.password === password);

  if (!validTeacher) {
    setMessage("Incorrect phone number or password. Please try again.");
    passwordInput.value = "";
    passwordInput.focus();
    return;
  }

  setMessage("Login successful. Loading dashboard...", "success");
  localStorage.setItem(authKey, "true");
  localStorage.setItem(teacherNameKey, validTeacher.name);
  currentUserRole = validTeacher.role || "teacher";
  localStorage.setItem(roleKey, currentUserRole);
  setTimeout(() => {
    showDashboard();
    loginForm.reset();
  }, 450);
}

function handleLogout() {
  localStorage.removeItem(authKey);
  localStorage.removeItem(teacherNameKey);
  localStorage.removeItem(roleKey);
  currentUserRole = "teacher";
  activeSection = "students";
  if (dashboardView && dashboardView.classList) {
    dashboardView.classList.remove("teacher-mode");
  }
  setTimeout(() => {
    showLogin();
  }, 350);
}

function matchesSearch(item) {
  const value = Object.values(item).join(" ").toLowerCase();
  return value.includes(searchTerm.toLowerCase());
}

function updateSearchUI(section, resultTotal) {
  if (!searchInput) return;

  const query = searchInput.value.trim();
  const isTeachersSection = section === "teachers";
  const placeholder = isTeachersSection
    ? "Search teachers by name, subject, or ID"
    : "Search students by name, class, or ID";

  searchInput.placeholder = placeholder;
  searchInput.setAttribute("aria-label", placeholder);

  if (searchClearBtn) {
    searchClearBtn.hidden = !query;
  }

  const searchBox = searchInput.closest(".search-box.modern");
  if (searchBox) {
    searchBox.classList.toggle("is-empty", !query);
  }

  if (searchHint) {
    if (query) {
      const noun = resultTotal === 1 ? "match" : "matches";
      searchHint.textContent = `${resultTotal} ${noun} for "${query}"`;
    } else {
      searchHint.textContent = isTeachersSection
        ? "Search teachers by name, subject, or ID."
        : "Search students by name, class, or ID.";
    }
  }
}

function createPhoneActions(phone, label) {
  if (!phone) {
    return `<div class="contact-actions"><span class="muted">No phone available</span></div>`;
  }
  const normalizedPhone = normalizePhone(phone);
  return `
    <div class="contact-actions">
      <a class="icon-btn call" href="tel:${normalizedPhone}" title="Call ${label}"><i class="fas fa-phone"></i></a>
      <a class="icon-btn wa" href="https://wa.me/${normalizedPhone}" target="_blank" rel="noopener" title="WhatsApp ${label}"><i class="fab fa-whatsapp"></i></a>
      <button class="icon-btn copy" type="button" data-phone="${normalizedPhone}" title="Copy ${label} number"><i class="fas fa-copy"></i></button>
    </div>
  `;
}

function studentCard(student) {
  const initials = student.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  return `
    <article class="contact-card" data-name="${student.name}">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div class="card-body">
        <div class="card-title">${student.name}</div>
        <div class="card-meta">Class <strong>${student.class}</strong></div>
        <div class="card-address"><small class="muted">Address</small><div class="address-value">${student.address}</div></div>
        <div class="card-row">
          <div class="card-phones">
            <div class="phone-item"><small class="muted">Student</small><div class="phone-value">${student.studentPhone}</div></div>
          </div>
          <div class="card-actions">
            ${createPhoneActions(student.studentPhone, `${student.name} student`)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function teacherCard(teacher) {
  const initials = teacher.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const subjectLabel = teacher.subject || "Teacher";
  const categoryLabel = getTeacherCategory(teacher.subject);
  return `
    <article class="contact-card" data-name="${teacher.name}">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div class="card-body">
        <div class="card-title">${teacher.name}</div>
        <div class="card-meta">${subjectLabel}</div>
        <div class="card-meta"><small class="muted">Type</small> ${categoryLabel}</div>
        <div class="card-row">
          <div class="card-phones">
            <div class="phone-item"><small class="muted">Phone</small><div class="phone-value">${teacher.phone || 'N/A'}</div></div>
          </div>
          <div class="card-actions">
            ${createPhoneActions(teacher.phone, teacher.name)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function staffCard(member) {
  const initials = member.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const titleLabel = member.title || "Staff";
  return `
    <article class="contact-card" data-name="${member.name}">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div class="card-body">
        <div class="card-title">${member.name}</div>
        <div class="card-meta">${titleLabel}</div>
        <div class="card-row">
          <div class="card-phones">
            <div class="phone-item"><small class="muted">Phone</small><div class="phone-value">${member.phone || 'N/A'}</div></div>
          </div>
          <div class="card-actions">
            ${createPhoneActions(member.phone, member.name)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function normalizeClassValue(rawClass) {
  if (!rawClass) return "";

  const value = String(rawClass).trim().toLowerCase();
  if (!value) return "";
  if (value === "nursery" || value === "nur") return "Nursery";
  if (value === "kg" || value === "kindergarten") return "KG";

  const cleaned = value
    .replace(/[’'`]/g, "")
    .replace(/\s+/g, "")
    .replace(/\(|\)/g, "")
    .replace(/"/g, "");

  const sectionMatch = cleaned.match(/^(\d+)([a-z])$/i);
  if (sectionMatch) {
    return `${sectionMatch[1]}${sectionMatch[2].toUpperCase()}`;
  }

  const numericMatch = cleaned.match(/^(\d+)$/);
  if (numericMatch) {
    return numericMatch[1];
  }

  return cleaned.toUpperCase();
}

function getTeacherCategory(subject) {
  if (!subject) return "Other";
  const normalized = subject.toLowerCase();
  if (normalized.includes("class teacher")) return "Class Teacher";
  if (normalized.includes("subject teacher")) return "Subject Teacher";
  if (normalized.includes("vice principal")) return "Vice Principal";
  if (normalized.includes("principal")) return "Principal";
  return "Other";
}

function extractTeacherClass(subject) {
  if (!subject) return null;
  const match = subject.match(/Class Teacher[- ]?(.+)/i);
  return match ? match[1].trim() : null;
}

function formatClassLabel(rawClass) {
  const normalized = normalizeClassValue(rawClass);
  if (!normalized) return "All classes";
  if (normalized === "Nursery") return "Nursery";
  if (normalized === "KG") return "KG";
  return normalized;
}

function getClassSortKey(rawClass) {
  const normalized = normalizeClassValue(rawClass);
  if (normalized === "Nursery") return [0, 0];
  if (normalized === "KG") return [1, 0];

  const sectionMatch = normalized.match(/^(\d+)([A-Z])$/);
  if (sectionMatch) {
    return [2 + Number(sectionMatch[1]), sectionMatch[2].charCodeAt(0) - 64];
  }

  const numericMatch = normalized.match(/^(\d+)$/);
  if (numericMatch) {
    return [2 + Number(numericMatch[1]), 0];
  }

  return [99, 0];
}

function getClassOptions() {
  return Array.from(new Set(students.map(student => normalizeClassValue(student.class))))
    .filter(Boolean)
    .sort((a, b) => {
      const aKey = getClassSortKey(a);
      const bKey = getClassSortKey(b);
      return aKey[0] - bKey[0] || aKey[1] - bKey[1] || a.localeCompare(b);
    });
}

function renderDirectory() {
  const section = activeSection;
  let source = section === "students" ? students : section === "teachers" ? teachers : staff;
  
  // Sort teachers: class teachers first (sorted by class), then principal, vice principal, subject teachers, others
  if (section === "teachers") {
    source = [...source].sort((a, b) => {
      const catA = getTeacherCategory(a.subject);
      const catB = getTeacherCategory(b.subject);
      
      // Priority order: Principal → Vice Principal → Class Teacher (sorted by class) → Subject Teacher → Other
      const priority = {
        "Principal": 1,
        "Vice Principal": 2,
        "Class Teacher": 3,
        "Subject Teacher": 4,
        "Other": 5
      };
      
      if (priority[catA] !== priority[catB]) {
        return priority[catA] - priority[catB];
      }
      
      // If both are class teachers, sort by class
      if (catA === "Class Teacher") {
        const classA = extractTeacherClass(a.subject);
        const classB = extractTeacherClass(b.subject);
        const keyA = classA ? getClassSortKey(classA) : [99, 0];
        const keyB = classB ? getClassSortKey(classB) : [99, 0];
        return keyA[0] - keyB[0] || keyA[1] - keyB[1];
      }
      
      // Otherwise, sort by name
      return a.name.localeCompare(b.name);
    });
  }
  
  const badgeLabel = section === "students" ? "Students" : section === "teachers" ? "Teachers" : "Staff";
  const filtered = source.filter(item => {
    if (!matchesSearch(item)) return false;
    if (section === 'students' && activeClassFilter) {
      return normalizeClassValue(item.class) === activeClassFilter;
    }
    if (section === 'teachers' && activeSectionFilter) {
      return getTeacherCategory(item.subject) === activeSectionFilter;
    }
    if (section === 'staff' && activeSectionFilter) {
      return item.title === activeSectionFilter;
    }
    return true;
  });
  const title = section === "students" ? "Students" : section === "teachers" ? "Teachers" : "Staff";
  const eyebrow = section === "students" ? "Student List" : section === "teachers" ? "Teacher List" : "Staff Directory";

  sectionTitle.textContent = title;
  activeEyebrow.textContent = eyebrow;
  resultCount.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
  const badgeLabelElement = document.querySelector(".badge-label");
  if (badgeLabelElement) {
    badgeLabelElement.textContent = badgeLabel;
  }
  updateSearchUI(section, filtered.length);
  directoryGrid.innerHTML = filtered.map(item => {
    if (section === "students") return studentCard(item);
    if (section === "teachers") return teacherCard(item);
    return staffCard(item);
  }).join("");
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  directoryGrid.classList.toggle("hidden", filtered.length === 0);

  if (classFilter) {
    classFilter.style.display = section === 'students' ? '' : 'none';
  }
  if (sectionFilter) {
    sectionFilter.style.display = section === 'teachers' || section === 'staff' ? '' : 'none';
  }
}

function getTeacherFilterOptions() {
  return Array.from(new Set(teachers.map(teacher => getTeacherCategory(teacher.subject))))
    .sort((a, b) => a.localeCompare(b));
}

function getStaffFilterOptions() {
  return Array.from(new Set(staff.map(member => member.title || "Other")))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function populateClassFilter() {
  if (!classFilter) return;
  const classes = getClassOptions();
  classFilter.innerHTML = '<option value="">All classes</option>' + classes.map(c => `<option value="${c}">${formatClassLabel(c)}</option>`).join('');
  classFilter.value = activeClassFilter || '';
}

function populateSectionFilter(section) {
  if (!sectionFilter) return;
  let options = ['<option value="">All types</option>'];
  if (section === 'teachers') {
    options = options.concat(getTeacherFilterOptions().map(type => `<option value="${type}">${type}</option>`));
  } else if (section === 'staff') {
    options = options.concat(getStaffFilterOptions().map(title => `<option value="${title}">${title}</option>`));
  }
  sectionFilter.innerHTML = options.join('');
  sectionFilter.value = activeSectionFilter || '';
}

function setActiveSection(section) {
  if (currentUserRole !== "admin" && section === 'staff') {
    return;
  }
  activeSection = section;
  document.querySelectorAll("[data-section]").forEach(button => {
    button.classList.toggle("active", button.dataset.section === section);
  });
  populateSectionFilter(section);
  renderDirectory();
}

async function copyPhone(phone) {
  try {
    await navigator.clipboard.writeText(phone);
    showToast(`Copied ${phone}`);
  } catch (error) {
    const tempInput = document.createElement("input");
    tempInput.value = phone;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    tempInput.remove();
    showToast(`Copied ${phone}`);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

// Mobile menu toggle for login view
const menuToggle1 = document.getElementById('menuToggle');
const mobileMenu1 = document.getElementById('mobileMenu');
const menuOverlay1 = document.getElementById('menuOverlay');

function toggleMenu1() {
  if (menuToggle1 && mobileMenu1 && menuOverlay1) {
    menuToggle1.classList.toggle('active');
    mobileMenu1.classList.toggle('active');
    menuOverlay1.classList.toggle('active');
  }
}

// Mobile menu toggle for dashboard view
const menuToggle2 = document.getElementById('menuToggle2');
const mobileMenu2 = document.getElementById('mobileMenu2');
const menuOverlay2 = document.getElementById('menuOverlay2');

function toggleMenu2() {
  if (menuToggle2 && mobileMenu2 && menuOverlay2) {
    menuToggle2.classList.toggle('active');
    mobileMenu2.classList.toggle('active');
    menuOverlay2.classList.toggle('active');
  }
}

function toggleSection(sectionId) {
  const sectionContent = document.getElementById(sectionId);
  if (sectionContent) {
    const section = sectionContent.parentElement;

    // Close all other sections first (accordion behavior)
    document.querySelectorAll('.menu-section').forEach(otherSection => {
      if (otherSection !== section) {
        otherSection.classList.remove('expanded');
      }
    });

    // Toggle current section
    section.classList.toggle('expanded');
  }
}

if (menuToggle1) menuToggle1.addEventListener('click', toggleMenu1);
if (menuOverlay1) menuOverlay1.addEventListener('click', toggleMenu1);
if (mobileMenu1) {
  mobileMenu1.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggleMenu1();
    }
  });
}

if (menuToggle2) menuToggle2.addEventListener('click', toggleMenu2);
if (menuOverlay2) menuOverlay2.addEventListener('click', toggleMenu2);
if (mobileMenu2) {
  mobileMenu2.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggleMenu2();
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
} else {
  console.warn('Login form not found: #loginForm');
}

// class filter change
if (classFilter) {
  classFilter.addEventListener('change', (e) => {
    activeClassFilter = e.target.value;
    renderDirectory();
  });
}

if (sectionFilter) {
  sectionFilter.addEventListener('change', (e) => {
    activeSectionFilter = e.target.value;
    renderDirectory();
  });
}



if (searchClearBtn) {
  searchClearBtn.addEventListener("click", () => {
    searchTerm = "";
    searchInput.value = "";
    renderDirectory();
    searchInput.focus();
  });
}

// Handle both logout buttons
document.addEventListener("click", event => {
  const logoutButton = event.target.closest(".logout-btn") || event.target.closest(".logout-btn-mobile");
  if (logoutButton) {
    handleLogout();
  }
});

if (searchInput) {
  searchInput.addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    renderDirectory();
  });
}



document.addEventListener("click", event => {
  const sectionButton = event.target.closest("[data-section]");
  const copyButton = event.target.closest("[data-phone]");

  if (sectionButton) {
    setActiveSection(sectionButton.dataset.section);
  }

  if (copyButton) {
    copyPhone(copyButton.dataset.phone);
  }

  // edit/delete removed — actions handled elsewhere if needed
});

showLoader();
// small UX: show loading overlay then dashboard
if (isLoggedIn()) {
  document.getElementById('loadingOverlay')?.classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('loadingOverlay')?.classList.add('hidden');
    currentUserRole = localStorage.getItem(roleKey) || "teacher";
    showDashboard();
  }, 450);
} else {
  showLogin();
}
hideLoader();

/* Theme toggling (sync with main site) */
const themeToggleBtn = document.getElementById('themeToggle');
const rootEl = document.documentElement;
const storedTheme = localStorage.getItem('grid2081-theme');

const applyTheme = (theme) => {
  rootEl.setAttribute('data-theme', theme);
  localStorage.setItem('grid2081-theme', theme);
  if (themeToggleBtn) {
    const icon = themeToggleBtn.querySelector('i');
    const text = themeToggleBtn.querySelector('.theme-toggle-text');
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      if (text) text.textContent = 'Light Mode';
      themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.className = 'fas fa-moon';
      if (text) text.textContent = 'Dark Mode';
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
};

const toggleTheme = () => {
  const nextTheme = rootEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
};

applyTheme(storedTheme || 'light');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// populate class filter when dashboard becomes visible
document.addEventListener('DOMContentLoaded', () => {
  populateClassFilter();
});
