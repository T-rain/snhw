//scrollToTop
document.getElementById('scroll-top').onclick = function() {
    window.scrollTo(0, 0);
}

//add background-color on reading paragraph
var getEleAndIter = function(cb) {
    var needToChangeTagArray = ['p', 'h3', 'h1'];
    needToChangeTagArray.forEach(function(element) {
        var divpbgHTMLcollectionLength = document.getElementsByTagName(element).length;
        for (var i = 0; i < divpbgHTMLcollectionLength; i++) {
            cb(element, i);
        }
    });

}

getEleAndIter(function(element, i) {
    document.getElementsByTagName(element)[i].onmouseover = function() {
        document.getElementsByTagName(element)[i].className += " pbgcolorpink";
    }

    document.getElementsByTagName(element)[i].onmouseout = function() {
        var classNameString = document.getElementsByTagName(element)[i].className;
        var index = classNameString.indexOf("pbgcolorpink");
        var changeName = classNameString.substring(0, index);
        document.getElementsByTagName(element)[i].className = changeName;
    }
});

//change font-size
var needToChangeIDSize = ['x-small', 'medium', 'x-large'];

needToChangeIDSize.forEach(function(ele) {
    document.getElementById(ele).onclick = function() {
        document.body.style.fontSize = ele;
    }

});


var storageRef = firebase.storage().ref();

// get image from firebase
var needToGetImage = ['adgreen', 'aduber', 'school']
needToGetImage.forEach(function(filename) {
    var publicRef = storageRef.child('public/' + filename + '.png');
    // console.log(publicRef);
    publicRef.getDownloadURL().then(function(url) {
        // console.log('url = ', url);
        var img = document.getElementById(filename);
        img.src = url;
    });
});



//database status
var databaseRef = firebase.database().ref();
var messageData = databaseRef.child('messages/');

messageData.on('child_added', function(data) {
    var childData = data.val();
    // console.log(data.key);

    var messageListDiv = document.getElementById('messageList');
    var messageDiv = "<div><small class='pull-right'><i>" + childData.date + "</i></small><h5>" + childData.name + "</h5><small class='col-lg-12'>" + childData.text + "</small></div>";

    messageListDiv.innerHTML += messageDiv;
});



//sendMessage
document.getElementById('sendMessage').onclick = function() {
    var time = new Date().toISOString();
    //for any location to UTC+8
    var timeUTC8 = new Date(time.replace('Z', '-08:00'))

    var timeUTC8stamp = timeUTC8.getTime();
    var date = timeUTC8.toISOString().slice(0, 10);
    var name = document.getElementById('formName').value;
    var text = document.getElementById('formText').value;

    if(name && text){
        var textFile = new Blob([text], {
            type: 'text/plain'
        });

        var metadata = {
            contentType: 'text/plain'
        };



        var childName = 'message/secret-message-' + name + '_' + timeUTC8stamp + '.txt';
        var uploadTask = storageRef.child(childName).put(textFile, metadata);

        uploadTask.then(function(snapshot) {
            // console.log('上傳完成', snapshot);
            // console.log(snapshot.metadata);
            alert('上傳完成，檔案名稱為: ' + snapshot.metadata.fullPath.slice(0, snapshot.metadata.fullPath.indexOf('_')) + '\n\n下載URL為: ' + snapshot.downloadURL);

            // insert to database
            databaseRef.child('messages/' + name + '_' + timeUTC8stamp)
                .set({
                    "name": name,
                    "date": date,
                    "text": text
                });

        }).catch(function(error) {
            console.error('Upload failed:', error);
        });


    }

    


}
