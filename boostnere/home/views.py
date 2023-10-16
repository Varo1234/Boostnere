from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .forms import ContactForm


def home_view(request):
    return render(request, 'home.html')


def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()

            # Enviar correo electrónico
            message = f"Name: {form.cleaned_data['name']}\nEmail: {form.cleaned_data['email']}\n\n{form.cleaned_data['message']}"
            send_mail(
                form.cleaned_data['subject'],
                message,
                form.cleaned_data['email'],
                ['alvaro18gp@gmail.com'],  # Cambiar a tu dirección de correo electrónico
            )
            # Añadir un mensaje de éxito
            messages.success(request, 'Tu mensaje ha sido enviado con éxito. \n ¡Pronto te contactaremos!')
            return redirect('home')
        else:
            # Añadir mensajes de error específicos
            if 'name' in form.errors:
                messages.error(request, 'Por favor, introduce tu nombre.')
            if 'email' in form.errors:
                messages.error(request, 'Por favor, introduce un correo electrónico válido.')
            if 'subject' in form.errors:
                messages.error(request, 'El asunto es necesario.')
            if 'message' in form.errors:
                messages.error(request, 'No olvides escribir tu mensaje.')
    else:
        form = ContactForm()
    return render(request, 'home.html', {'form': form})

