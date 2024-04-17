import Link from "next/link";

const mockUrls = [
  "https://img.freepik.com/free-photo/beautiful-endangered-american-jaguar-nature-habitat-panthera-onca-wild-brasil-brasilian-wildlife-pantanal-green-jungle-big-cats_475641-2191.jpg?t=st=1713385900~exp=1713389500~hmac=9c6655e0649aec6e8ce4aebfb560c0653c927ab0bd98b5c690b06b44fa3fd0c9&w=1800",
  "https://img.freepik.com/free-photo/redeyed-tree-frog-closeup-leaves-redeyed-tree-frog-agalychnis-callidryas-closeup-flower_488145-3022.jpg?t=st=1713385988~exp=1713389588~hmac=f95e5fcffc5454cff75e377010ae77192148c2e02b5006ff697936c83e8c3975&w=1800",
  "https://img.freepik.com/free-photo/beautiful-baby-zebra-sitting-ground-captured-african-jungle_181624-35400.jpg?t=st=1713386001~exp=1713389601~hmac=68f2e65668fa999ac717b376e48fa921d032fe7a8b6110f1b1e5c2c973cae3a3&w=1800",
  "https://img.freepik.com/free-photo/cute-animals-group-white-background_23-2150038555.jpg?t=st=1713386052~exp=1713389652~hmac=4efdb553d32a552dfd725c7da662c5b53dbcb9a0980394e6028fd296aa8d3606&w=1800",
  "https://img.freepik.com/free-photo/side-view-dog-looking-away-copy-space_23-2148326235.jpg?t=st=1713386069~exp=1713389669~hmac=cd9c451fb481b7398cd924e5b2042d00fa01256cdd36107a804dee57a22ab5b6&w=1800",
  "https://img.freepik.com/free-photo/elephants-drinking-water_181624-5984.jpg?t=st=1713386083~exp=1713389683~hmac=bbd937034ca6bee818f601bfe126b9c38003903e62f2d5f0ed39b4abbbef5cdd&w=1800",
  "https://img.freepik.com/free-photo/close-up-adorable-guinea-pigs-eating_23-2151182904.jpg?t=st=1713386096~exp=1713389696~hmac=c5a3596ce6a70f7a2b4d7fde622a8efb91fc3b1f8fd11eceeb2eb526f9cbe464&w=1800",
  "https://img.freepik.com/free-photo/closeup-green-sea-turtle-swimming-underwater-lights_181624-25236.jpg?t=st=1713386111~exp=1713389711~hmac=7702d4cbc90d724da2f2ba6aea1c96149c9623c30977b48d846d8afc608b1813&w=1800",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-56">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
