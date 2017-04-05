USE [cm_mcaefeeder]
GO
DROP SCHEMA [cm_mcaefeeder]
GO

USE [cm_mcaefeeder]
GO
DROP USER [cm_mcaefeeder]
GO

USE [master]
GO
DROP LOGIN [cm_mcaefeeder]
GO

EXEC msdb.dbo.sp_delete_database_backuphistory @database_name = N'cm_mcaefeeder'
GO
USE [master]
GO
ALTER DATABASE [cm_mcaefeeder] SET SINGLE_USER WITH ROLLBACK IMMEDIATE
GO
USE [master]
GO
DROP DATABASE [cm_mcaefeeder]
GO
