const paragraph = document.querySelector("#paragraph");
const heading = document.querySelector("h1");


// Exercise 04
const originalText = paragraph.textContent.trim();
const words = originalText.split(/\s+/);

const wordCount = words.length;

const countText = document.createElement("p");
countText.textContent = "Word Count: " + wordCount;

heading.after(countText);


// Exercise 03
const sentences = originalText.split(".");

paragraph.textContent = "";

for (let i = 0; i < sentences.length; i++) {

    if (sentences[i].trim() !== "") {

        const sentence = sentences[i].trim() + ".";

        const sentenceWords = sentence.split(" ");

        for (let j = 0; j < sentenceWords.length; j++) {

            // Exercise 01
            if (sentenceWords[j].length > 8) {

                const span = document.createElement("span");

                span.textContent = sentenceWords[j];
                span.style.backgroundColor = "yellow";

                paragraph.appendChild(span);
            }

            else {
                paragraph.append(sentenceWords[j]);
            }

            paragraph.append(" ");
        }

        const br = document.createElement("br");
        paragraph.append(br);
    }
}


// Exercise 02
const link = document.createElement("a");

link.textContent = "Source";
link.href = "https://google.com/";
link.target = "_blank";

paragraph.after(link);