
function addTree(test) {
    var headText = test.head,
        buttonText = test.button,
        legend0 = test.question_0.question,
        legend1 = test.question_1.question,
        legend2 = test.question_2.question;
        var arr0 = [test.question_0.answer_0,
                    test.question_0.answer_1,
                    test.question_0.answer_2],
            arr1 = [test.question_1.answer_0,
                    test.question_1.answer_1,
                    test.question_1.answer_2],
            arr2 = [test.question_2.answer_0,
                    test.question_2.answer_1,
                    test.question_2.answer_2];

    function createTest() {
        function addClass(el, name) {
            var elem = document.createElement(el);
            elem.setAttribute("class", name);
            return elem;
        }

        function addQuestion(arr, legend) {
            var fldset = document.createElement("fieldset");
            var lgn = addClass("legend","col-form-legend");

            function addAnswer(arrEl){
                var lbl = addClass("label","form-check-label");
                var inpt = addClass("input","form-check-input");
                inpt.setAttribute("type","checkbox");
                lbl.appendChild(inpt);
                lbl.appendChild(document.createTextNode(arrEl));
                return  lbl;
            }

            lgn.appendChild(document.createTextNode(legend));
            colDivM.appendChild(lgn);

            for (var i = 0; i < arr.length; i++){
                colDivM.appendChild(addAnswer(arr[i]));
            }
            return  fldset;
        }

       var cnt = addClass("div","container");
       var rowDivH = addClass("div","row");
       var rowDivM = addClass("div","row");
       var colDivH = addClass("div","col text-center");
       var colDivM = addClass("div","col");
       var btnDiv = addClass("div","button");
       var btn = addClass("button","btn");

       colDivH.appendChild(document.createTextNode(headText));
       rowDivH.appendChild(colDivH);
       btn.appendChild(document.createTextNode(buttonText));
       btnDiv.appendChild(btn);
       cnt.appendChild(rowDivH);
       colDivM.appendChild(addQuestion(arr0,legend0));
       colDivM.appendChild(addQuestion(arr1,legend1));
       colDivM.appendChild(addQuestion(arr2,legend2));
       colDivM.appendChild(btnDiv);
       rowDivM.appendChild(colDivM)
       cnt.appendChild(rowDivM);
       return cnt;
    }

    return createTest();
}
var doc = document.body;
doc.appendChild(addTree(test));
