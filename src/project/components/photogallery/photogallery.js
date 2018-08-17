import './photogallery.scss';

export class PhotoGallery {
    constructor(targetEl) {
        this.target = targetEl;
        this.render();
        this.attachEvents();
    }

    linkOnPhoto(photoElement, styleName) {
        photoElement.classList.add(styleName); 
    }

    resetBigPhotoStyles() {
        this.bigphoto.classList.remove('photos__photo1_bigphoto1');
        this.bigphoto.classList.remove('photos__photo2_bigphoto2');
        this.bigphoto.classList.remove('photos__photo3_bigphoto3');
        this.bigphoto.classList.remove('photos__photo4_bigphoto4');
        this.bigphoto.classList.remove('photos__photo5_bigphoto5');
    }

    attachEvents() {
        this.photo1.addEventListener('click', () => {
            this.resetBigPhotoStyles();
            this.linkOnPhoto(this.bigphoto, 'photos__photo1_bigphoto1');
        });
        this.photo2.addEventListener('click', () => {
            this.resetBigPhotoStyles();
            this.linkOnPhoto(this.bigphoto, 'photos__photo2_bigphoto2');
        });
        this.photo3.addEventListener('click', () => {
            this.resetBigPhotoStyles();
            this.linkOnPhoto(this.bigphoto, 'photos__photo3_bigphoto3');
        });
        this.photo4.addEventListener('click', () => {
            this.resetBigPhotoStyles();
            this.linkOnPhoto(this.bigphoto, 'photos__photo4_bigphoto4');
        });
        this.photo5.addEventListener('click', () => {
            this.resetBigPhotoStyles();
            this.linkOnPhoto(this.bigphoto, 'photos__photo5_bigphoto5');
        });
    }
    
    render() {

        this.photos = document.createElement('div');
        this.photos.classList.add('photos');

        this.bigphoto = document.createElement('div');
        // this.bigphoto.classList.add('photos__bigphoto1');

        this.photo1 = document.createElement('div');
        this.photo1.classList.add('photos__photo1');
        this.photos.appendChild(this.photo1);

        this.photo2 = document.createElement('div');
        this.photo2.classList.add('photos__photo2');
        this.photos.appendChild(this.photo2);
        
        this.photo3 = document.createElement('div');
        this.photo3.classList.add('photos__photo3');
        this.photos.appendChild(this.photo3);

        this.photo4 = document.createElement('div');
        this.photo4.classList.add('photos__photo4');
        this.photos.appendChild(this.photo4);

        this.photo5 = document.createElement('div');
        this.photo5.classList.add('photos__photo5');
        this.photos.appendChild(this.photo5);
 
        this.target.appendChild(this.photos);
        this.target.appendChild(this.bigphoto);
    }
}
