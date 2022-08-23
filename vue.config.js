module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  devServer: {
    allowedHosts: [
      'pedulicovid19-pemasyarakatan.com', // the domain name address allowed to access, that is, the address of peanut shell intranet penetration
      '*pedulicovid19-pemasyarakatan.com'   // . Is a wildcard of the secondary domain name   
    ],
  },
}