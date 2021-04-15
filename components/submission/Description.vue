<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="py-6" v-html="description" />
  </div>
</template>

<script>
import showdown from 'showdown'

export default {
  data() {
    return {
      description: `null`,
    }
  },

  fetch() {
    const text = `# Inque ore herbarum manu nec dicta pectus

## Nec multa studiosior vulnere natam sua sedebat

Lorem markdownum ferens demptos, *inquit inde quam* violenta? Deus damnatque
dirimant retinacula iuguloque **corpora** florem, abit, tenetque fratrem
protegit.

    if (technologyNode - rpc_box_bsod + wepInteractiveImport) {
        aspOpen(smb_status_interpreter, vdu_firmware_toggle);
        station_raster.isdn = oopOpenglSequence;
        recycle_dma(transistorIpadRipcording, box);
    }
    hsf(-2, address, frozenStatus);
    if (file(externalPetabyte) >= ccd + 4 / servlet_web_read) {
        serial(1, characterCross);
        lion = 5;
    }

Suci qua aegro es, nunc **cupiens te** et coniugiique melius ille quamvis. Et
vultus famaque bis robora quo eloquioque, ilia umet vetus belli restat que, tori
animos.

## Marsya quidem frondosus Quid traherent Nioben quam

Harena velum, monstri nostro membra, maturus in sermone urbem. Ino incumbere
foedera Talia reperto; [res ante duxisses](http://pabula-quaerit.net/) vina
pasci deerit de agmine melior. Et manus, sapiens sua relatus pereat at pectore
Hectora.

- Occiduae mox dixerat blandita respicit perpetuo nomen
- Mare in dictis promere excidit nocte
- Armis tum quibus insequitur ignara
- Tua et pectore dolor veluti rupit mihi

Verbere tot undis occupet genas haec: dicere *cumque calidumque efficit* boum?
Mea est Medusae umet hic spectata dubito penna ara fugatas **amat ceram sucus**!
Inque rediturum adit est est tempora silva obiecit quique abire animos.

## Pacaverat certa dominaeque manus victima succincta eram

Queritur ignis loquor, est sed virgam, curvae cum adire flagrat, hic ex pugnat
verba [indigenis tibi](http://www.sol-vomit.net/)! Petere modo favilla inde
dicere conquesti tacitaque posset verba hac prosecta, deos dumque; decipit.

Phorbas subit sub undis ambage flumine **et Circaea cervus** Stabiasque tamen
Pyracmon meo. Terram caelamina formatur illa nobis facundia depulerat ipsa tum
ignotas, nec est venimus pars: quem per. Umbra cum tum sua tenax laedi, munera
sed venenis frequentat attritas Thyesteis primisque supplex.

Caeli precatur concipit, sunt, mutasse; quia adiciunt rerum sibi aridus, quietis
sacra, seque e primumque. Roratis corpore. Amorem in hic Medea fatifero loca;
[ab](http://flenti-niveum.org/crudelesque.html) Ecce aera, sua pro imum voces.
Clamore pretiumque Ceycis quaeque. Boote patrios ad credit Glaucus bibulas in
conferat liber, orbis satis praecipitant!`
    const converter = new showdown.Converter()
    this.description = converter.makeHtml(text)
  },
}
</script>
