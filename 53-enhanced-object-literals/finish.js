const photosGallery = (title, dimensions, date) => {
  return {
    title,
    [date] : true,
    [dimensions] : true,

    info() {
      console.log(
        `Фото "${title}" имеет разрешение ${date}`
      );
    },

    publishInfo() {
      console.log(
        `Фото было опубликовано ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} секунды назад`
      )}
  }
}


const myDogPhoto = photosGallery("My dog", "1920x1080", new Date())

const testDimension1 = "1920x1080"
const testDimension2 = "1080x720"

myDogPhoto.info()
/* Фото "My dog" имеет разрешение 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000)
/* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
к параметрам функции "photosGallery" (например "date")? */

/* Потому что метод publishInfo находится в объекте, который возвращается
 в функции photosGallery*/

console.log(myDogPhoto[testDimension1]) // true
console.log(myDogPhoto[testDimension2]) // undefined
