<script>
    let contacts = [];

    async function getContacts(){
        console.log("Cargando contactos");
        const res = await fetch("/contacts");

        if(res.ok){
            console.log("Ok");
            const json = await res.json();
            contacts = json;
            console.log(`Hemos pillao ${contacts.length} contactos`);
        }else{
            console.log("Error!")
        }
    }

    console.log("Antes de que lleguen los contactos bro");
    getContacts();
    console.log("Han cargao los contactos");

</script>

<main>
    <table>
        <tr>
            <td>
                Mi célula forma perfecta <!-- Que no que esto es celda en verda ave  je je-->
            </td>
        </tr>
    </table>

</main>

<style>
    table{
        border: 5px;
        color: brown;
    }
</style>