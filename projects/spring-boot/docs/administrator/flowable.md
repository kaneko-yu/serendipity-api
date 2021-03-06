<h1 align="center">Working with Flowable</h1>

### Groups

Groups manage groups of users. Serendipity uses OpenLDAP to store groups and user credentials.

Serendipity has two default groups:

* Team Member
* Team Leader (Approver)

**Note:** Groups must also be configured in [Keycloak](https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/administrator/keycloak.md).

[flowable.ldif](https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/server/services/openldap/ldif/flowable.ldif):

```
...

# Groups

dn: cn=Team Leader, ou=groups, dc=flowable,dc=org
changetype: add
objectclass: top
objectclass: groupOfUniqueNames
cn: Team Leader
ou: Team Leader
uniqueMember: uid=rob.ferguson,ou=users,dc=flowable,dc=org

dn: cn=Team Member, ou=groups, dc=flowable,dc=org
changetype: add
objectclass: top
objectclass: groupOfUniqueNames
cn: Team Member
ou: Team Member
uniqueMember: uid=rob.ferguson,ou=users,dc=flowable,dc=org
uniqueMember: uid=sean.doyle,ou=users,dc=flowable,dc=org
uniqueMember: uid=robert.russo,ou=users,dc=flowable,dc=org
```

Tasks can be assigned to an individual user or to a group (of candidate users):

<p align="center">
  <img src="https://github.com/Robinyo/serendipity-api/blob/master/projects/spring-boot/docs/screen-shots/assignments-candidate-groups.png">
</p>

### Flowable UI Applications

* Flowable Identity Management
* Flowable Modeler
* Flowable Task
* Flowable Admin

You can [download](https://flowable.com/open-source/downloads/) the Flowable open source distribution from the Flowable 
web site.

#### Externalised Configuration

The Flowable Web applications take advantage of Spring Boot's support for externalised configuration:

```
spring.main.banner-mode=off
spring.jpa.open-in-view=false

# Logging
logging.level.root=INFO
logging.level.org.flowable=WARN
logging.level.org.hibernate.SQL=WARN
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=WARN
logging.level.org.springframework.security=WARN

# Spring Datasource - Postgres
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://localhost:5432/serendipity
spring.datasource.username=admin
spring.datasource.password=secret

# Spring JPA - Postgres
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update

# Spring Datasource - H2
# spring.datasource.driver-class-name=org.h2.Driver
# spring.datasource.url=jdbc:h2:~/serendipity-db/db;AUTO_SERVER=TRUE;AUTO_SERVER_PORT=9091;DB_CLOSE_DELAY=-1
# spring.datasource.username=admin
# spring.datasource.password=secret

# Spring JPA - H2
# spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
# spring.jpa.hibernate.ddl-auto=update

# H2 Console
# spring.h2.console.enabled=false
# spring.h2.console.path=/h2-console
# spring.h2.console.settings.trace=false
# spring.h2.console.settings.web-allow-others=false

# Default Flowable Admin Accounts - see: flowable.ldif
flowable.idm.app.admin.user-id=flowable
flowable.idm.app.admin.password=test
flowable.idm.app.admin.first-name=
flowable.idm.app.admin.last-name=Administrator
flowable.idm.app.admin.email=admin@serendipity.org.au

flowable.common.app.idm-admin.user=flowable
flowable.common.app.idm-admin.password=test

flowable.modeler.app.deployment-api-url=http://localhost:9999/flowable-task/app-api

# LDAP
flowable.idm.ldap.enabled=true
flowable.idm.ldap.server=ldap://localhost
flowable.idm.ldap.port=389
flowable.idm.ldap.user=cn=admin,dc=flowable,dc=org
flowable.idm.ldap.password=secret
flowable.idm.ldap.base-dn=dc=flowable,dc=org
flowable.idm.ldap.user-base-dn=ou=users,dc=flowable,dc=org
flowable.idm.ldap.group-base-dn=ou=groups,dc=flowable,dc=org
flowable.idm.ldap.query.user-by-id=(&(objectClass=inetOrgPerson)(uid={0}))
flowable.idm.ldap.query.user-by-full-name-like=(&(objectClass=inetOrgPerson)(|({0}=*{1}*)({2}=*{3}*)))
flowable.idm.ldap.query.all-users=(objectClass=inetOrgPerson)
flowable.idm.ldap.query.groups-for-user=(&(objectClass=groupOfUniqueNames)(uniqueMember={0}))
flowable.idm.ldap.query.all-groups=(objectClass=groupOfUniqueNames)
flowable.idm.ldap.query.group-by-id=(&(objectClass=groupOfUniqueNames)(uniqueId={0}))
flowable.idm.ldap.attribute.user-id=uid
flowable.idm.ldap.attribute.first-name=cn
flowable.idm.ldap.attribute.last-name=sn
flowable.idm.ldap.attribute.email=mail
flowable.idm.ldap.attribute.group-id=cn
flowable.idm.ldap.attribute.group-name=cn
flowable.idm.ldap.cache.group-size=10000
flowable.idm.ldap.cache.group-expiration=180000
```

#### Flowable Identity Management

To launch Flowable's Identity Management application:

```
java -jar flowable-idm.war
```

Then navigate to: http://localhost:8080/flowable-idm

#### Flowable Modeler

To launch Flowable's Modeler application:

```
java -jar flowable-modeler.war
```

Then navigate to: http://localhost:8888/flowable-modeler

#### Flowable Task

To launch Flowable's Task application:

```
java -jar flowable-task.war
```

Then navigate to: http://localhost:9999/flowable-task

#### Flowable Admin

To launch Flowable's Admin application:

```
java -jar flowable-admin.war
```

Then navigate to: http://localhost:9988/flowable-admin

### Database Driver

The Flowable UI application wars include the H2 database driver. If you want to use a different 
[database](https://flowable.com/open-source/docs/bpmn/ch03-Configuration/#supported-databases) then you need to update 
each war file, for example:

```
# mv postgresql-42.2.14.jar WEB-INF/lib

jar uf0 flowable-admin.war WEB-INF/lib/postgresql-42.2.14.jar
jar uf0 flowable-idm.war WEB-INF/lib/postgresql-42.2.14.jar
jar uf0 flowable-modeler.war WEB-INF/lib/postgresql-42.2.14.jar
jar uf0 flowable-task.war WEB-INF/lib/postgresql-42.2.14.jar
```
