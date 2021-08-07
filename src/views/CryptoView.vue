<template>
  <section v-if="errored">
    <p>No es posible obtener la información en este momento</p>
  </section>
  <section v-else-if="loading">
    <p>Cargando...</p>
  </section>
  <br>
  <div>
    <fieldset>
  <legend>DÓLAR</legend>
    <p>
      <strong>Oficial:</strong> u$s {{ currencyDolar.oficial }} |
      <strong>Solidario:</strong> u$s {{ currencyDolar.solidario }} |
      <strong>Blue:</strong> u$s {{ currencyDolar.blue }}
      <br>
      <strong>MEP:</strong> u$s {{ currencyDolar.mep }} |
      <strong>CCL:</strong> u$s {{ currencyDolar.ccl }} |
      <strong>CCB:</strong> u$s {{ currencyDolar.ccb }}
    </p>
    </fieldset>
  </div>
  <br>
  <table>
    <thead>
    <tr>
      <th title="Cryptocurrency">CRYPTO</th>
      <th title="Precio Bruto, sin sumar comisiones">COMPRAR</th>
      <th title="Precio Final, sumando comisiones">COMPRA TOTAL</th>
      <th title="Precio Bruto, sin restar comisiones">VENDER</th>
      <th title="Precio Final, restando comisiones">VENTA TOTAL</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>ArgenBTC</td>
    <td>$ {{ currencyArgenbtc.ask }}</td>
    <td>$ {{ currencyArgenbtc.totalAsk }}</td>
    <td>$ {{ currencyArgenbtc.bid }}</td>
    <td>$ {{ currencyArgenbtc.totalBid }}</td>
    </tr>
    </tbody>
  </table>
  <br>
  <table>
    <thead>
    <tr>
      <th title="Cryptocurrency">CRYPTO</th>
      <th title="Precio Bruto, sin sumar comisiones">COMPRAR</th>
      <th title="Precio Final, sumando comisiones">COMPRA TOTAL</th>
      <th title="Precio Bruto, sin restar comisiones">VENDER</th>
      <th title="Precio Final, restando comisiones">VENTA TOTAL</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{{ currencyAll }}</td>
      <td>{{ currencyAll.argenbtc }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import CryptoService from '@/services/CryptoService';

export default {
  name: 'CryptoView',
  data() {
    return {
      currencyArgenbtc: [{
        ask: '',
        totalAsk: '',
        bid: '',
        totalBid: '',
      }],
      currencyAll: [],
      currencyDolar: [],
      loading: true,
      errored: false,
    };
  },
  created() {
    CryptoService.getArgenBtc().then((response) => {
      this.currencyArgenbtc = response.data;
    })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(this.loading = false);
    CryptoService.getBtc().then((response) => {
      this.currencyAll = response.data;
    })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(this.loading = false);
    CryptoService.getDolar().then((response) => {
      this.currencyDolar = response.data;
    })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(this.loading = false);
  },
};
</script>

<style scoped>
table, th, td {
  margin-top: 50px;
  border:2px solid #78788c;
  border-collapse: collapse;
  width:100%;
  font-family: "Arial Narrow", serif;
  table-layout: fixed;
}

th {
  padding: 10px;
  font-size: 16px;
  font-weight: bolder;
  background: rgba(67, 187, 133, 0.36);
}

td {
  padding: 5px;
  font-size: 14px;
}

p {
  font-size: 18px;
  text-align: center;
  font-family: "JetBrains Mono Light", serif;
}

legend {
  font-family: "JetBrains Mono Light", serif;
  background:#78788c;
  color: #fff;
  padding: 3px 6px;
}

fieldset {
  background: rgba(67, 187, 133, 0.36);
  margin-top: 50px;
  border:2px solid #78788c;
  border-collapse: collapse;
}
</style>
