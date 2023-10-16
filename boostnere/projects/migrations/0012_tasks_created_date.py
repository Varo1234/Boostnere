# Generated by Django 4.2.5 on 2023-10-12 18:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0011_tasks_deleted'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='created_date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
