import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",o=>{o.preventDefault();const t=o.target.delay.value,i=o.target.state.value;new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(t):r(t)},t)}).then(e=>{s.success({title:"OK",titleColor:"#fff",messageColor:"#fff",icon:"",message:`✅ Fulfilled promise in ${e}ms`,position:"topCenter",backgroundColor:"#59a10d"})}).catch(e=>{s.error({title:"",icon:"",titleColor:"#fff",messageColor:"#fff",message:`❌ Rejected promise in ${e}ms`,position:"topCenter",backgroundColor:"#ef4040"})})});
//# sourceMappingURL=commonHelpers2.js.map