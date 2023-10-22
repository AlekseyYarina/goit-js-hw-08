// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");

const imgOfGallary = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item" style="list-style: none;>
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a></li>`;
});

gallery.innerHTML = imgOfGallary.join("");

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});