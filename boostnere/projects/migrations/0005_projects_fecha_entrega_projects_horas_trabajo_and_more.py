# Generated by Django 4.2.5 on 2023-10-10 16:48

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_remove_userprofile_about'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='fecha_entrega',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='projects',
            name='horas_trabajo',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='projects',
            name='precio_proyecto',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='projects',
            name='sobre_proyecto',
            field=models.TextField(default=' '),
            preserve_default=False,
        ),
    ]