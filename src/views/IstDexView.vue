
<template >
    <div class="flex justify-between items-center overflow-hidden w-screen flex-col xl:flex-row">

        <div class="z-10 xl:ml-14 max-w-lg flex flex-col items-center h-screen justify-center">
            <h2 class="text-white text-8xl mb-14  ">Ist Dex</h2>
            <div class="flex flex-row  flex-wrap justify-evenly">
                <IstButton v-for="item in json" :item="item" class="m-5 hover:scale-105"
                    v-on:click="changeIstSelected(item)" />
            </div>
        </div>


        <div class="z-10 mt-40 xl:mt-0">
            <IstItem :item="istSelectedRef" />
        </div>
        <img src="../assets/courbe3.png" alt="" class="absolute bottom-0 left-0 h-screen z-0 hidden xl:flex">
        <div class="bg-[#00102F] w-screen h-screen flex xl:hidden absolute bottom-0 left-0  z-0">h</div>

        <img src="../assets/arrow-back-circle-outline.svg" alt=""
            class="absolute top-0 z-20 left-0 h-10 m-5 hover:scale-105" v-on:click="goToHome">






    </div>

</template>

<script setup>
import IstButton from './utils/IstButton.vue';
import IstItem from './utils/IstItem.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

function goToHome() {
    router.push('/');
}

var json = [
    {
        "id": 1,
        "nom": "Chlamydiae",
        "desc": "Parmi les infection sexuellement transmissibles (IST) bactériennes, l’infection à chlamydiae est l’une des plus fréquentes. C’est la grande gagnante parmi les jeunes (16-25 ans). La raison de ce succès ? Elle se transmet facilement, ne donne pas toujours des symptômes, et manque de visibilité…",
        "img": "Chlamydiae.png",
        "Protection": [{ nom: "preservatif" }],
        "Traitement": ["azithromycine", "doxycycline"],
        "Explication": "Un médecin peut vous prescrire un traitement minute (en une prise) à base d'azythromycine, suite à un dépistage se révélant positif de la chlamydia, ou bien un traitement plus long à base de doxycycline (2 fois par jour pendant 7 jours)."
    },
    {
        "id": 2,
        "nom": "Blennorragie",
        "desc": "blennorragie est une infection sexuellement transmissible bactérienne. Elle est très répandue. Comme la plupart des IST, elle est même en recrudescence depuis la fin des années 90.",
        "img": "blennorragie.png",
        "Protection": [{ nom: "preservatif" }],
        "Traitement": ["antibiotiques"],
        "Explication": "Le traitement repose habituellement sur l'administration d'antibiotiques. Dans certains cas particuliers, un traitement plus long peut être indiqué."
    },
    {
        "id": 3,
        "nom": "hépatite B",
        "desc": "Une hépatite est une inflammation aiguë ou chronique du foie. Le foie est le « filtre » du corps humain, il sert à éliminer les toxines, mais aussi à répartir des nutriments dans le corps. L’inflammation, lorsqu’elle persiste, peut mener à une dégradation progressive de l’organe, et évoluer en cirrhose ou en cancer.",
        "img": "hepatite.png",
        "Protection": [{ nom: "preservatif" }],
        "Traitement": ["comprimés antiviral"],
        "Explication": "Le traitement de l'hépatite B chronique, à base de comprimés antivials, a pour but : de réduire ou annuler la multiplication du virus, ce qui limite ses attaques sur le foie. "
    },
    {
        "id": 4,
        "nom": "Herpès",
        "desc": "L’herpès (HSV1) est souvent responsable du fameux « bouton de fièvre » qui pousse au coin des lèvres. Il peut néanmoins être transmis à la zone génitale par contact direct ou indirect et devenir ainsi un herpès génital",
        "img": "Herpes.png",
        "Protection": [{ nom: "preservatif" }],
        "Traitement": ["comprimés antiviral"],
        "Explication": "L'herpès génital est traité par un médicament antiviral.S'il est pris suffisamment tôt, il diminue l'intensité et la durée des lésions. Mais il n'élimine pas les virus « dormants », donc ne permet pas une guérison définitive."
    },
    {
        "id": 5,
        "nom": "Papillomavirus",
        "desc": "Le Papillomavirus Humain / HPV est une infection sexuellement transmissible virale. Quand on entre en contact avec le Papillomavirus Humain, la plupart du temps, le corps élimine le virus spontanément au bout d’un certain temps. La majorité des personnes vont pouvoir transmettre le virus, mais ne développeront pas de symptômes.",
        "img": "Papillomavirus.png",
        "Protection": [{ nom: "preservatif" }],
        "Traitement": ["crème", "Azote", "laser"],
        "Explication": "La cryothérapie, de la crème spécialisée ou un traitement au laser sont les meilleurs moyens de retarder/soulager le papillomavirus."
    },
    {
        "id": 6,
        "nom": "Syphilis",
        "desc": "La syphilis se transmet très majoritairement par un contact avec une lésion syphilitique, notamment un chancre, lors d’une pénétration sexuelle vaginale, anale, une fellation reçue ou pratiquée.",
        "img": "syphilis.png",
        "Protection": [{ nom: "preservatif" }],
        "Traitement": ["antibiotiques"],
        "Explication": "Le traitement de la syphilis repose sur un antibiotique : la benzathine pénicilline G « retard » le plus souvent. La durée du traitement dépend du stade syphilitique. Un suivi est nécessaire pour s’assurer de la guérison du patient. Les partenaires sexuels doivent aussi être traités."
    },
    {
        "id": 7,
        "nom": "VIH/SIDA",
        "desc": "En début d’infection (environ 15 à 21 jours après) peuvent apparaître des symptômes rappelant une grosse grippe (VIH). Le stade Sida est un stade où la dégradation du système immunitaire (qui sert à défendre le corps contre les maladie) est telle que la personne n’est plus protégée.",
        "img": "VIH.png",
        "Protection": [{ nom: "TasP" }, { nom: "PrEP" }, { nom: "TPE" }, { nom: "preservatif" }],
        "Traitement": ["antirétroviraux"],
        "Explication": "Le traitement antirétroviral combiné empêche le VIH de se multiplier et peut faire disparaître le virus dans le sang. Il permet ainsi au système immunitaire du patient de récupérer, de vaincre les infections et d'éviter le développement du sida et d'autres effets à long terme de l'infection à VIH."

    }
]

var istSelectedRef = ref(json[0]);

function changeIstSelected(item) {
    istSelectedRef.value = item;
}

</script>
