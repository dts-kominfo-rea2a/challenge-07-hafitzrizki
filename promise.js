const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

const promiseOutput = async (emosi) => {
  try {
    //gabung array of object nya
    const arrEmosi = (await promiseTheaterIXX()).concat(await promiseTheaterVGC());
    //gunakan filter untuk key hasil, hitung panjang size list menggunakan length
    return arrEmosi.filter((element)=> element.hasil === emosi).length;
  } catch (error) {
    console.log(error)
  }
};



module.exports = {
  promiseOutput,
};
