# Generated by Django 4.2.5 on 2023-10-10 05:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_userprofile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='about',
        ),
    ]