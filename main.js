number_of_the_images = ["Family Book.jpg", "father.jpg", "mother.jpg", "Me.jpg"];
name_of_people = ["Mandar Mane", "Manali Mane", "Mayank Mane"]

function next() {
    var update_image= images + [i];
    var update_name= names+ [i];

    for (var i = 0; i < 4; i++) {
    document.getElementById("number_of_the_images").src= update_image;
    document.getElementById("name_of_people").src= update_image;
    
    }
}
