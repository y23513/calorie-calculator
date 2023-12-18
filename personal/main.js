//計算ボタンが押されたら
const calcu = ()=>{
    const input1 = document.querySelector("#mets");
    const input2 = document.querySelector("#time");
    const input3 = document.querySelector("#weight");
    result = document.querySelector("#kcal");
    result.value = Number(input1.value) * (Number(input2.value) / 60) * Number(input3.value) * 1.05;
}

//リセットボタンが押されたら
const reset = ()=>{
    document.querySelector("#mets").value ="";
    document.querySelector("#time").value ="";
    document.querySelector("#weight").value ="";
    document.querySelector("#kcal").value ="";
}

//関数を付与
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".calcu").addEventListener("click", calcu);
    document.querySelector(".reset").addEventListener("click", reset);
});



