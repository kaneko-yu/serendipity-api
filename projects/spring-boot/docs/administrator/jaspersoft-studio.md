<h1 align="center">Working with Jaspersoft Studio</h1>

### Getting Started

Jaspersoft Studio is an Eclipse-based report designer for JasperReports, it's available as an Eclipse plug-in or as a 
stand-alone application.

[Download](https://community.jaspersoft.com/project/jaspersoft-studio/releases) the Community Edition of Jaspersoft 
Studio.

#### Servers

In Jaspersoft Studio right-click on Servers and select Create JasperReports Server Connection:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-jasperserver-connection.png">
</p> 

#### Data Adapters - Database JDBC Connection

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/database-jdbc-connection.png">
</p>

JDBC Driver: org.postgresql.Driver  
JDBC Url: jdbc:postgresql://localhost:5432/serendipity  
Username: POSTGRES_USER (admin)  
Password: POSTGRES_PASSWORD (secret)  

#### Custom Fonts

[Download](https://fonts.google.com/specimen/Open+Sans?query=open+sans#standard-styles) the Open Sans font family.

In Jaspersoft Studio select Preferences => Jaspersoft Studio => Fonts and then click the Add button.

Normal Tab:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-configure-custom-font-normal.png">
</p>

Bold Tab:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-configure-custom-font-bold.png">
</p>

**Note:** It has been my experience that Jaspersoft Studio doesn't support the Web Open Font Format (.woff).

#### Fonts Extension

In Jaspersoft Studio choose Preferences => Jaspersoft Studio => Fonts, select 'Open Sans' and then click the Export button:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-fonts-extension.png">
</p>

Place a copy of the `open-sans-fonts-extension.jar` in your project folder:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-project-folder.png">
</p>

Right-click on your project and select Build Path => Configure Build Path. Click the Add Jars button and add the 
`open-sans-fonts-extension.jar` to the Java Build Path.

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-java-build-path.png">
</p>

#### Report Publishing

In Jaspersoft Studio select Project => Publish the file on JasperReports Server:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-publishing-wizard-report-location.png">
</p>

Select the location (e.g., Reports) and then click the Next button:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-publishing-wizard-report-resources.png">
</p>

Select the report's resources (e.g., JRLogo) and then click Next:

**Note:** The JasperReports logo (JRLogo) has already been published to the repository so we can use the 'Ignore' publish strategy.

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-publishing-wizard-report-configure-data-source.png">
</p>

Select a data source and then click Finish:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jaspersoft-studio-publishing-wizard-report-success.png">
</p>

JasperReports Server repository:

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/jasperserver-reports-folder.png">
</p>
 
### Resources

* Jaspersoft Community: [Documentation](https://community.jaspersoft.com/documentation?version=59011)
* Jaspersoft Community: [Forum (Answers)](https://community.jaspersoft.com/answers)
* Jaspersoft Wiki: [Custom Fonts with the Fonts Extension](https://community.jaspersoft.com/wiki/custom-font-font-extension)
