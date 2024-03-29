<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scale=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('assets/projects/project_13/css/style.css') }}">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:regular,500,600,700,800,900" rel="stylesheet" />
</head>
<body>
    <div class="wrapper">
        {{-- @include('projects.project_13.includes.header') --}}
        <main class="main">
            @yield('content')
        </main>
        @include('projects.project_13.includes.footer')
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
    <script src="{{ asset('assets/projects/project_13/js/script.js') }}"></script>
</body>
</html>